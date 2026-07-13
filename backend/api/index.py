import os
import uuid

import cloudinary
import cloudinary.uploader
from fastapi import Depends, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import and_
from sqlalchemy.orm import Session

from .auth import require_admin
from .database import Base, engine, get_db
from .email import send_email
from .models import Booking, GalleryPhoto, SiteContent, SiteImage
from .schemas import (
    BookingCreate,
    BookingOut,
    BookingRequestCreate,
    ContentUpdate,
    GalleryPhotoOut,
    SiteImageOut,
)

GALLERY_CATEGORIES = {"interior", "outdoor", "activities", "dining", "firstfloor"}

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Rustic Farm Villa Booking API")

allowed_origins = [
    origin.strip()
    for origin in os.environ.get(
        "ALLOWED_ORIGINS", "http://localhost:3000"
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
    allow_headers=["Content-Type", "X-Admin-Key"],
)

cloudinary.config(
    cloud_name=os.environ.get("CLOUDINARY_CLOUD_NAME"),
    api_key=os.environ.get("CLOUDINARY_API_KEY"),
    api_secret=os.environ.get("CLOUDINARY_API_SECRET"),
    secure=True,
)


@app.get("/api/bookings", response_model=list[BookingOut])
def list_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).order_by(Booking.check_in).all()


@app.post("/api/bookings", response_model=BookingOut, status_code=201)
def create_booking(
    payload: BookingCreate,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    overlap = (
        db.query(Booking)
        .filter(
            and_(
                Booking.check_in < payload.check_out,
                Booking.check_out > payload.check_in,
            )
        )
        .first()
    )
    if overlap:
        raise HTTPException(
            status_code=409,
            detail=f"Overlaps existing booking #{overlap.id} "
            f"({overlap.check_in} to {overlap.check_out})",
        )

    booking = Booking(
        check_in=payload.check_in,
        check_out=payload.check_out,
        note=payload.note,
        status="booked",
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking


@app.delete("/api/bookings/{booking_id}", status_code=204)
def delete_booking(
    booking_id: int,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    db.delete(booking)
    db.commit()
    return None


@app.post("/api/bookings/request", response_model=BookingOut, status_code=201)
def create_booking_request(
    payload: BookingRequestCreate,
    db: Session = Depends(get_db),
):
    overlap = (
        db.query(Booking)
        .filter(
            Booking.status == "booked",
            and_(
                Booking.check_in < payload.check_out,
                Booking.check_out > payload.check_in,
            ),
        )
        .first()
    )
    if overlap:
        raise HTTPException(
            status_code=409,
            detail="Those dates are already booked. Please choose different dates.",
        )

    booking = Booking(
        check_in=payload.check_in,
        check_out=payload.check_out,
        status="pending",
        guest_name=payload.guest_name,
        guest_email=payload.guest_email,
        guest_phone=payload.guest_phone,
        guests=payload.guests,
        package=payload.package,
        message=payload.message,
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)

    guest_count_text = f" ({payload.guests} guests)" if payload.guests else ""
    send_email(
        payload.guest_email,
        payload.guest_name,
        "Your Booking Request - Rustic Farm Villa",
        f"""Hi {payload.guest_name},

Thanks for reaching out to Rustic Farm Villa! We've received your booking
request for {payload.check_in} to {payload.check_out}{guest_count_text}.
{f"Package: {payload.package}" if payload.package else ""}

We'll review availability and get back to you within 24 hours to confirm.

Best Regards,
Rustic Farm Villa""",
    )

    admin_email = os.environ.get("ADMIN_NOTIFICATION_EMAIL")
    if admin_email:
        send_email(
            admin_email,
            "Rustic Farm Villa Admin",
            "New Booking Request - Rustic Farm Villa",
            f"""New booking request from {payload.guest_name}.

Dates: {payload.check_in} to {payload.check_out}
Guests: {payload.guests or "Not specified"}
Phone: {payload.guest_phone}
Email: {payload.guest_email}
Package: {payload.package or "Not specified"}
{f"Message: {payload.message}" if payload.message else ""}

Review and confirm this request in the admin panel.""",
        )

    return booking


@app.patch("/api/bookings/{booking_id}/confirm", response_model=BookingOut)
def confirm_booking(
    booking_id: int,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    overlap = (
        db.query(Booking)
        .filter(
            Booking.id != booking_id,
            Booking.status == "booked",
            and_(
                Booking.check_in < booking.check_out,
                Booking.check_out > booking.check_in,
            ),
        )
        .first()
    )
    if overlap:
        raise HTTPException(
            status_code=409,
            detail=f"Overlaps confirmed booking #{overlap.id} "
            f"({overlap.check_in} to {overlap.check_out}). Reject one of them first.",
        )

    booking.status = "booked"
    db.commit()
    db.refresh(booking)
    return booking


@app.get("/api/content")
def get_content(db: Session = Depends(get_db)):
    rows = db.query(SiteContent).all()
    return {row.key: row.value for row in rows}


@app.put("/api/content")
def update_content(
    payload: ContentUpdate,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    for key, value in payload.updates.items():
        row = db.query(SiteContent).filter(SiteContent.key == key).first()
        if row:
            row.value = value
        else:
            db.add(SiteContent(key=key, value=value))
    db.commit()
    return {"updated": list(payload.updates.keys())}


@app.get("/api/images")
def get_images(db: Session = Depends(get_db)):
    rows = db.query(SiteImage).all()
    return {row.slot: {"url": row.url, "alt": row.alt} for row in rows}


@app.post("/api/images/{slot}", response_model=SiteImageOut)
async def upload_image(
    slot: str,
    file: UploadFile = File(...),
    alt: str = Form(""),
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    if not cloudinary.config().cloud_name:
        raise HTTPException(
            status_code=500, detail="Cloudinary is not configured on the server"
        )

    contents = await file.read()
    result = cloudinary.uploader.upload(
        contents,
        folder="rustic-farm-villa",
        public_id=slot,
        overwrite=True,
        eager=[
            {
                "width": 1920,
                "crop": "limit",
                "quality": "auto:good",
                "fetch_format": "auto",
            }
        ],
    )
    eager = result.get("eager") or []
    url = eager[0]["secure_url"] if eager else result["secure_url"]

    row = db.query(SiteImage).filter(SiteImage.slot == slot).first()
    if row:
        row.url = url
        row.alt = alt or row.alt
    else:
        row = SiteImage(slot=slot, url=url, alt=alt or None)
        db.add(row)
    db.commit()
    db.refresh(row)
    return row


@app.delete("/api/images/{slot}", status_code=204)
def reset_image(
    slot: str,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    row = db.query(SiteImage).filter(SiteImage.slot == slot).first()
    if row:
        db.delete(row)
        db.commit()
    return None


@app.get("/api/gallery", response_model=list[GalleryPhotoOut])
def list_gallery_photos(db: Session = Depends(get_db)):
    return db.query(GalleryPhoto).order_by(GalleryPhoto.created_at.desc()).all()


@app.post("/api/gallery", response_model=GalleryPhotoOut, status_code=201)
async def add_gallery_photo(
    file: UploadFile = File(...),
    alt: str = Form(""),
    category: str = Form(...),
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    if category not in GALLERY_CATEGORIES:
        raise HTTPException(
            status_code=422,
            detail=f"category must be one of {sorted(GALLERY_CATEGORIES)}",
        )
    if not cloudinary.config().cloud_name:
        raise HTTPException(
            status_code=500, detail="Cloudinary is not configured on the server"
        )

    contents = await file.read()
    public_id = f"rustic-farm-villa/gallery/{uuid.uuid4().hex}"
    result = cloudinary.uploader.upload(
        contents,
        public_id=public_id,
        eager=[
            {
                "width": 1920,
                "crop": "limit",
                "quality": "auto:good",
                "fetch_format": "auto",
            }
        ],
    )
    eager = result.get("eager") or []
    url = eager[0]["secure_url"] if eager else result["secure_url"]

    photo = GalleryPhoto(
        url=url, public_id=public_id, alt=alt or None, category=category
    )
    db.add(photo)
    db.commit()
    db.refresh(photo)
    return photo


@app.delete("/api/gallery/{photo_id}", status_code=204)
def delete_gallery_photo(
    photo_id: int,
    db: Session = Depends(get_db),
    _: None = Depends(require_admin),
):
    photo = db.query(GalleryPhoto).filter(GalleryPhoto.id == photo_id).first()
    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found")
    if cloudinary.config().cloud_name:
        cloudinary.uploader.destroy(photo.public_id)
    db.delete(photo)
    db.commit()
    return None
