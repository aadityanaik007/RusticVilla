from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, field_validator


class BookingCreate(BaseModel):
    check_in: date
    check_out: date
    note: Optional[str] = None

    @field_validator("check_out")
    @classmethod
    def check_out_after_check_in(cls, v, info):
        check_in = info.data.get("check_in")
        if check_in and v <= check_in:
            raise ValueError("check_out must be after check_in")
        return v


class BookingRequestCreate(BaseModel):
    check_in: date
    check_out: date
    guest_name: str
    guest_email: str
    guest_phone: str
    guests: Optional[int] = None
    package: Optional[str] = None
    message: Optional[str] = None

    @field_validator("check_out")
    @classmethod
    def check_out_after_check_in(cls, v, info):
        check_in = info.data.get("check_in")
        if check_in and v <= check_in:
            raise ValueError("check_out must be after check_in")
        return v


class BookingOut(BaseModel):
    id: int
    check_in: date
    check_out: date
    status: str
    previous_status: Optional[str] = None
    note: Optional[str] = None
    guest_name: Optional[str] = None
    guest_email: Optional[str] = None
    guest_phone: Optional[str] = None
    guests: Optional[int] = None
    package: Optional[str] = None
    message: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class ContentUpdate(BaseModel):
    updates: dict[str, str]


class SiteImageOut(BaseModel):
    slot: str
    url: str
    alt: Optional[str] = None

    class Config:
        from_attributes = True


class GalleryPhotoOut(BaseModel):
    id: int
    url: str
    alt: Optional[str] = None
    category: str

    class Config:
        from_attributes = True
