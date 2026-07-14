import React, { useEffect, useRef, useState } from "react";
import Seo from "../SEO/Seo";
import "./Admin.css";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useGalleryPhotos } from "../../context/SiteContentContext";

const API_BASE = process.env.REACT_APP_BOOKING_API_URL;
const STORAGE_KEY = "rfv_admin_key";

const GALLERY_CATEGORIES = [
  { key: "interior", label: "Interior" },
  { key: "outdoor", label: "Outdoor" },
  { key: "activities", label: "Activities" },
  { key: "dining", label: "Dining" },
  { key: "firstfloor", label: "First Floor" },
];

const TEXT_FIELD_GROUPS = [
  {
    title: "Contact Details",
    fields: [
      { key: "contact.phone_front_desk", label: "Front Desk Phone" },
      { key: "contact.phone_reservations", label: "Reservations Phone" },
      {
        key: "contact.whatsapp_number",
        label: "WhatsApp Number (digits only, e.g. 91XXXXXXXXXX)",
      },
      { key: "contact.email", label: "Email" },
      { key: "contact.address", label: "Address" },
      { key: "contact.instagram_url", label: "Instagram URL" },
      { key: "contact.facebook_url", label: "Facebook URL" },
      { key: "contact.maps_url", label: "Google Maps Link" },
    ],
  },
  {
    title: "Home Page",
    fields: [
      { key: "home.hero.quote", label: "Hero Quote" },
      { key: "home.about.description", label: "About the Villa Description" },
      { key: "home.tour.description", label: "Take a Tour Description" },
      {
        key: "home.amenities.description",
        label: "Amenities Teaser Description",
      },
    ],
  },
  {
    title: "About Page",
    fields: [
      { key: "about.hero.subtitle", label: "Hero Subtitle" },
      { key: "about.story.paragraph1", label: "Our Story — Paragraph 1" },
      { key: "about.story.paragraph2", label: "Our Story — Paragraph 2" },
      { key: "about.vintage.paragraph1", label: "Vintage Charm — Paragraph 1" },
      { key: "about.vintage.paragraph2", label: "Vintage Charm — Paragraph 2" },
    ],
  },
  {
    title: "Stay Page",
    fields: [
      { key: "stay.hero.subtitle", label: "Hero Subtitle" },
      { key: "stay.rooms.intro", label: "Rooms Intro" },
      { key: "stay.room.master.desc", label: "Master Bedroom Description" },
      {
        key: "stay.room.bright.desc",
        label: "Bright & Airy Bedroom Description",
      },
      { key: "stay.annexe.description", label: "Hearth Annexe Description" },
      { key: "stay.camping.description", label: "Camping Tents Description" },
      { key: "stay.attic.description", label: "Attic Description" },
      { key: "stay.dining.description", label: "Dining Description" },
    ],
  },
  {
    title: "Packages Page",
    fields: [
      { key: "packages.weekend.tagline", label: "Weekend Getaway Tagline" },
      { key: "packages.weekend.price", label: "Weekend Getaway Price" },
      {
        key: "packages.celebration.tagline",
        label: "Celebration Package Tagline",
      },
    ],
  },
  {
    title: "Footer",
    fields: [{ key: "footer.description", label: "Brand Description" }],
  },
];

const IMAGE_FIELD_GROUPS = [
  {
    title: "Home Page",
    slots: [
      { slot: "home.hero", label: "Hero Background" },
      { slot: "home.about", label: "About the Villa" },
      { slot: "home.tour", label: "Take a Tour" },
    ],
  },
  {
    title: "About Page",
    slots: [
      { slot: "about.hero", label: "Hero Background" },
      { slot: "about.story", label: "Our Story" },
      { slot: "about.vintage", label: "Vintage Charm" },
    ],
  },
  {
    title: "Gallery Page",
    slots: [{ slot: "gallery.hero", label: "Hero Background" }],
  },
  {
    title: "Stay Page",
    slots: [
      { slot: "stay.hero", label: "Hero Background" },
      { slot: "stay.room.master", label: "Master Bedroom" },
      { slot: "stay.room.bright", label: "Bright & Airy Bedroom" },
      { slot: "stay.annexe", label: "Hearth Annexe" },
      { slot: "stay.camping", label: "Camping Tents" },
      { slot: "stay.attic.1", label: "Attic Photo 1" },
      { slot: "stay.attic.2", label: "Attic Photo 2" },
      { slot: "stay.attic.3", label: "Attic Photo 3" },
      { slot: "stay.attic.4", label: "Attic Photo 4" },
      { slot: "stay.dining", label: "Dining" },
    ],
  },
  {
    title: "Packages Page",
    slots: [
      { slot: "packages.hero", label: "Hero Background" },
      { slot: "packages.weekend", label: "Weekend Getaway" },
      { slot: "packages.celebration", label: "Celebration Package" },
    ],
  },
  {
    title: "Contact Page",
    slots: [{ slot: "contact.hero", label: "Hero Background" }],
  },
];

const Admin = () => {
  const [adminKey, setAdminKey] = useState(
    () => localStorage.getItem(STORAGE_KEY) || ""
  );
  const [keyInput, setKeyInput] = useState("");
  const [activeTab, setActiveTab] = useState("bookings");

  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ checkIn: "", checkOut: "", note: "" });

  const [textDrafts, setTextDrafts] = useState({});
  const [images, setImages] = useState({});
  const [groupStatus, setGroupStatus] = useState({});
  const [uploadingSlot, setUploadingSlot] = useState("");
  const [contentError, setContentError] = useState("");

  const { galleryPhotos, refetchGalleryPhotos } = useGalleryPhotos();
  const [newPhotoAlt, setNewPhotoAlt] = useState("");
  const [newPhotoCategory, setNewPhotoCategory] = useState(
    GALLERY_CATEGORIES[0].key
  );
  const [addingPhoto, setAddingPhoto] = useState(false);
  const [deletingPhotoId, setDeletingPhotoId] = useState(null);
  const galleryFileInputRef = useRef(null);

  const loadBookings = () => {
    if (!API_BASE) return;
    setLoading(true);
    fetch(`${API_BASE}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setError("");
      })
      .catch(() => setError("Could not reach the booking API."))
      .finally(() => setLoading(false));
  };

  const loadContent = () => {
    if (!API_BASE) return;
    Promise.all([
      fetch(`${API_BASE}/api/content`).then((res) => (res.ok ? res.json() : {})),
      fetch(`${API_BASE}/api/images`).then((res) => (res.ok ? res.json() : {})),
    ])
      .then(([contentData, imagesData]) => {
        const drafts = {};
        for (const group of TEXT_FIELD_GROUPS) {
          for (const field of group.fields) {
            drafts[field.key] =
              contentData[field.key] ?? TEXT_DEFAULTS[field.key] ?? "";
          }
        }
        setTextDrafts(drafts);
        setImages(imagesData || {});
        setContentError("");
      })
      .catch(() => setContentError("Could not reach the content API."));
  };

  useEffect(() => {
    loadBookings();
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, keyInput);
    setAdminKey(keyInput);
  };

  const handleLock = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAdminKey("");
    setKeyInput("");
  };

  const handleAddBooking = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.checkIn || !form.checkOut) {
      setError("Pick both a check-in and check-out date.");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey,
        },
        body: JSON.stringify({
          check_in: form.checkIn,
          check_out: form.checkOut,
          note: form.note || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Failed to add booking");
      }
      setForm({ checkIn: "", checkOut: "", note: "" });
      loadBookings();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRemove = async (id) => {
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/bookings/${id}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey },
      });
      if (!res.ok && res.status !== 204) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to remove booking");
      }
      loadBookings();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleConfirm = async (id) => {
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/bookings/${id}/confirm`, {
        method: "PATCH",
        headers: { "X-Admin-Key": adminKey },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to confirm booking");
      }
      loadBookings();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleTextChange = (key, value) => {
    setTextDrafts((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveGroup = async (group) => {
    setContentError("");
    setGroupStatus((prev) => ({ ...prev, [group.title]: "saving" }));
    const updates = {};
    for (const field of group.fields) {
      updates[field.key] = textDrafts[field.key] ?? "";
    }
    try {
      const res = await fetch(`${API_BASE}/api/content`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey,
        },
        body: JSON.stringify({ updates }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to save");
      }
      setGroupStatus((prev) => ({ ...prev, [group.title]: "saved" }));
      setTimeout(
        () => setGroupStatus((prev) => ({ ...prev, [group.title]: "" })),
        2000
      );
    } catch (err) {
      setContentError(err.message);
      setGroupStatus((prev) => ({ ...prev, [group.title]: "" }));
    }
  };

  const handleImageUpload = async (slot, file) => {
    if (!file) return;
    setContentError("");
    setUploadingSlot(slot);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch(`${API_BASE}/api/images/${slot}`, {
        method: "POST",
        headers: { "X-Admin-Key": adminKey },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || "Failed to upload image");
      }
      setImages((prev) => ({
        ...prev,
        [slot]: { url: data.url, alt: data.alt },
      }));
    } catch (err) {
      setContentError(err.message);
    } finally {
      setUploadingSlot("");
    }
  };

  const handleImageReset = async (slot) => {
    setContentError("");
    try {
      const res = await fetch(`${API_BASE}/api/images/${slot}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey },
      });
      if (!res.ok && res.status !== 204) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to reset image");
      }
      setImages((prev) => {
        const next = { ...prev };
        delete next[slot];
        return next;
      });
    } catch (err) {
      setContentError(err.message);
    }
  };

  const handleAddGalleryPhoto = async (e) => {
    e.preventDefault();
    const file = galleryFileInputRef.current?.files?.[0];
    if (!file) {
      setContentError("Choose a photo to upload.");
      return;
    }
    setContentError("");
    setAddingPhoto(true);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("alt", newPhotoAlt);
      body.append("category", newPhotoCategory);
      const res = await fetch(`${API_BASE}/api/gallery`, {
        method: "POST",
        headers: { "X-Admin-Key": adminKey },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || "Failed to add photo");
      }
      setNewPhotoAlt("");
      if (galleryFileInputRef.current) galleryFileInputRef.current.value = "";
      refetchGalleryPhotos();
    } catch (err) {
      setContentError(err.message);
    } finally {
      setAddingPhoto(false);
    }
  };

  const handleDeleteGalleryPhoto = async (id) => {
    setContentError("");
    setDeletingPhotoId(id);
    try {
      const res = await fetch(`${API_BASE}/api/gallery/${id}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey },
      });
      if (!res.ok && res.status !== 204) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to delete photo");
      }
      refetchGalleryPhotos();
    } catch (err) {
      setContentError(err.message);
    } finally {
      setDeletingPhotoId(null);
    }
  };

  return (
    <div className="admin-page">
      <Seo
        title="Admin"
        description="Manage Rustic Farm Villaa booking availability and site content."
        path="/admin"
      />

      <div className="admin-container">
        <h1 className="admin-title">Admin</h1>

        {!API_BASE && (
          <div className="admin-notice">
            The backend API isn't configured yet (
            <code>REACT_APP_BOOKING_API_URL</code> is unset). Deploy the
            backend first, then set that env var and rebuild.
          </div>
        )}

        {API_BASE && !adminKey && (
          <form className="admin-unlock" onSubmit={handleUnlock}>
            <label htmlFor="admin-key">Admin Key</label>
            <input
              id="admin-key"
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Enter admin key"
              required
            />
            <button type="submit">Unlock</button>
          </form>
        )}

        {API_BASE && adminKey && (
          <>
            <div className="admin-toolbar">
              <button className="admin-lock-btn" onClick={handleLock}>
                Lock
              </button>
            </div>

            <div className="admin-tabs">
              <button
                className={`admin-tab ${activeTab === "bookings" ? "active" : ""}`}
                onClick={() => setActiveTab("bookings")}
              >
                Bookings
              </button>
              <button
                className={`admin-tab ${activeTab === "content" ? "active" : ""}`}
                onClick={() => setActiveTab("content")}
              >
                Site Content
              </button>
              <button
                className={`admin-tab ${activeTab === "gallery" ? "active" : ""}`}
                onClick={() => setActiveTab("gallery")}
              >
                Gallery
              </button>
            </div>

            {activeTab === "bookings" && (
              <>
                {error && <div className="admin-error">{error}</div>}

                <form className="admin-add-form" onSubmit={handleAddBooking}>
                  <h2>Add a Booking</h2>
                  <div className="admin-form-row">
                    <div>
                      <label htmlFor="add-checkin">Check-in</label>
                      <input
                        id="add-checkin"
                        type="date"
                        value={form.checkIn}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, checkIn: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="add-checkout">Check-out</label>
                      <input
                        id="add-checkout"
                        type="date"
                        value={form.checkOut}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, checkOut: e.target.value }))
                        }
                        required
                      />
                    </div>
                  </div>
                  <label htmlFor="add-note">Note (optional)</label>
                  <input
                    id="add-note"
                    type="text"
                    value={form.note}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, note: e.target.value }))
                    }
                    placeholder="Guest name or reference"
                  />
                  <button type="submit" className="admin-add-btn">
                    Add Booking
                  </button>
                </form>

                <div className="admin-list">
                  <h2>Current Bookings</h2>
                  {loading && <p>Loading…</p>}
                  {!loading && bookings.length === 0 && <p>No bookings yet.</p>}
                  {bookings.map((b) => (
                    <div className="admin-booking-row" key={b.id}>
                      <div>
                        <span
                          className={`admin-booking-status ${
                            b.status === "pending" ? "pending" : "confirmed"
                          }`}
                        >
                          {b.status === "pending" ? "Pending" : "Confirmed"}
                        </span>
                        <strong>
                          {b.check_in} → {b.check_out}
                        </strong>
                        {b.note && (
                          <span className="admin-booking-note"> — {b.note}</span>
                        )}
                        {b.guest_name && (
                          <div className="admin-booking-guest">
                            {b.guest_name}
                            {b.guest_phone && ` · ${b.guest_phone}`}
                            {b.guest_email && ` · ${b.guest_email}`}
                            {b.guests && ` · ${b.guests} guest${b.guests > 1 ? "s" : ""}`}
                            {b.package && ` · ${b.package}`}
                            {b.message && (
                              <div className="admin-booking-message">
                                "{b.message}"
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="admin-booking-actions">
                        {b.status === "pending" && (
                          <button
                            className="admin-confirm-btn"
                            onClick={() => handleConfirm(b.id)}
                          >
                            Confirm
                          </button>
                        )}
                        <button
                          className="admin-remove-btn"
                          onClick={() => handleRemove(b.id)}
                        >
                          {b.status === "pending" ? "Reject" : "Remove"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "content" && (
              <>
                {contentError && (
                  <div className="admin-error">{contentError}</div>
                )}

                {TEXT_FIELD_GROUPS.map((group) => (
                  <div className="admin-content-group" key={group.title}>
                    <h2>{group.title}</h2>
                    {group.fields.map((field) => (
                      <div className="admin-content-field" key={field.key}>
                        <label htmlFor={field.key}>{field.label}</label>
                        <textarea
                          id={field.key}
                          rows={
                            (textDrafts[field.key] || "").length > 120 ? 4 : 2
                          }
                          value={textDrafts[field.key] ?? ""}
                          onChange={(e) =>
                            handleTextChange(field.key, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <button
                      className="admin-add-btn"
                      onClick={() => handleSaveGroup(group)}
                      disabled={groupStatus[group.title] === "saving"}
                    >
                      {groupStatus[group.title] === "saving"
                        ? "Saving…"
                        : groupStatus[group.title] === "saved"
                        ? "Saved ✓"
                        : "Save"}
                    </button>
                  </div>
                ))}

                <div className="admin-content-group">
                  <h2>Images</h2>
                  {IMAGE_FIELD_GROUPS.map((group) => (
                    <div key={group.title} className="admin-image-subgroup">
                      <h3>{group.title}</h3>
                      <div className="admin-image-grid">
                        {group.slots.map(({ slot, label }) => {
                          const current =
                            images[slot]?.url || IMAGE_DEFAULTS[slot]?.src;
                          return (
                            <div className="admin-image-card" key={slot}>
                              <img src={current} alt={label} />
                              <div className="admin-image-label">{label}</div>
                              <input
                                type="file"
                                accept="image/*"
                                disabled={uploadingSlot === slot}
                                onChange={(e) =>
                                  handleImageUpload(slot, e.target.files[0])
                                }
                              />
                              {uploadingSlot === slot && <span>Uploading…</span>}
                              {images[slot] && (
                                <button
                                  className="admin-remove-btn"
                                  onClick={() => handleImageReset(slot)}
                                >
                                  Reset to default
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "gallery" && (
              <>
                {contentError && (
                  <div className="admin-error">{contentError}</div>
                )}

                <div className="admin-content-group">
                  <h2>Add a Photo</h2>
                  <form className="admin-add-form" onSubmit={handleAddGalleryPhoto}>
                    <label htmlFor="gallery-file">Photo</label>
                    <input
                      id="gallery-file"
                      type="file"
                      accept="image/*"
                      ref={galleryFileInputRef}
                    />
                    <label htmlFor="gallery-alt">Caption / Alt Text</label>
                    <input
                      id="gallery-alt"
                      type="text"
                      value={newPhotoAlt}
                      onChange={(e) => setNewPhotoAlt(e.target.value)}
                      placeholder="e.g. Sunset by the pool"
                    />
                    <label htmlFor="gallery-category">Category</label>
                    <select
                      id="gallery-category"
                      value={newPhotoCategory}
                      onChange={(e) => setNewPhotoCategory(e.target.value)}
                    >
                      {GALLERY_CATEGORIES.map((c) => (
                        <option key={c.key} value={c.key}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="admin-add-btn"
                      disabled={addingPhoto}
                    >
                      {addingPhoto ? "Uploading…" : "Add Photo"}
                    </button>
                  </form>
                </div>

                <div className="admin-content-group">
                  <h2>Photos You've Added ({galleryPhotos.length})</h2>
                  {galleryPhotos.length === 0 && (
                    <p>No photos added yet — use the form above to add one.</p>
                  )}
                  <div className="admin-image-grid">
                    {galleryPhotos.map((photo) => (
                      <div className="admin-image-card" key={photo.id}>
                        <img src={photo.url} alt={photo.alt || ""} />
                        <div className="admin-image-label">
                          {GALLERY_CATEGORIES.find(
                            (c) => c.key === photo.category
                          )?.label || photo.category}
                        </div>
                        {photo.alt && <div>{photo.alt}</div>}
                        <button
                          className="admin-remove-btn"
                          disabled={deletingPhotoId === photo.id}
                          onClick={() => handleDeleteGalleryPhoto(photo.id)}
                        >
                          {deletingPhotoId === photo.id ? "Removing…" : "Remove"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
