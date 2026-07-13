import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import BookingCalendar from "../BookingCalendar/BookingCalendar";
import "./ContactUs.css";
import { TEXT_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText } from "../../context/SiteContentContext";

const API_BASE = process.env.REACT_APP_BOOKING_API_URL;

const ContactUs = () => {
  const address = useSiteText("contact.address", TEXT_DEFAULTS["contact.address"]);
  const phoneFrontDesk = useSiteText(
    "contact.phone_front_desk",
    TEXT_DEFAULTS["contact.phone_front_desk"]
  );
  const phoneReservations = useSiteText(
    "contact.phone_reservations",
    TEXT_DEFAULTS["contact.phone_reservations"]
  );
  const whatsappNumber = useSiteText(
    "contact.whatsapp_number",
    TEXT_DEFAULTS["contact.whatsapp_number"]
  );
  const mapsUrl = useSiteText("contact.maps_url", TEXT_DEFAULTS["contact.maps_url"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    packageType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDatesChange = (checkIn, checkOut) => {
    setFormData((prev) => ({ ...prev, checkIn, checkOut }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select both a check-in and check-out date on the calendar.");
      return;
    }

    if (!API_BASE) {
      alert(
        "Online booking requests aren't available yet. Please contact us directly by phone or WhatsApp."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Creates a pending booking (shows up in Admin -> Bookings) and
      // triggers both the guest confirmation and admin notification emails
      // server-side via Brevo.
      const res = await fetch(`${API_BASE}/api/bookings/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          guest_name: formData.name,
          guest_email: formData.email,
          guest_phone: formData.phone,
          guests: Number(formData.guests) || null,
          package: formData.packageType || null,
          message: formData.message || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.detail ||
            "Those dates could not be requested. Please pick different dates."
        );
      }

      setSubmitStatus("success");

      // Reset form with a small delay to show success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
          packageType: "",
          message: "",
        });
        setSubmitStatus(""); // Clear success message after form reset
      }, 3000);
    } catch (error) {
      console.error("Booking submission failed:", error);
      setSubmitStatus("error");
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Seo
        title="Contact Us"
        description="Get in touch with Rustic Farm Villa in Mandva, Wada to book your stay. Call, WhatsApp, or send an enquiry and we'll respond within 24 hours."
        path="/contact"
      />
      <Header />

      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            We're here to help you plan your perfect getaway
          </p>
        </div>
        <div className="contact-hero-overlay"></div>
      </div>

      <div className="contact-container">
        <WeatherWidget />

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-section">
              <h2 className="contact-section-title">Get in Touch</h2>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>
                      Rustic Farm Villa
                      <br />
                      {address}
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🏨</div>
                  <div className="contact-text">
                    <h3>Front Desk</h3>
                    <p>
                      <a
                        href={`tel:${phoneFrontDesk.replace(/\s+/g, "")}`}
                        className="contact-link"
                      >
                        {phoneFrontDesk}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📅</div>
                  <div className="contact-text">
                    <h3>Reservations</h3>
                    <p>
                      <a
                        href={`tel:${phoneReservations.replace(/\s+/g, "")}`}
                        className="contact-link"
                      >
                        {phoneReservations}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div className="contact-text">
                    <h3>WhatsApp</h3>
                    <p>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          "Hi, I'd like to enquire about booking Rustic Farm Villa."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        Chat with us instantly
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-section">
              <h3>Find Us</h3>
              <div className="map-container">
                <iframe
                  title="Rustic Farm Villa Location"
                  className="map-embed"
                  src="https://www.google.com/maps?q=19.7019817,73.2099689&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          <div className="booking-form">
            <div className="form-section">
              <h2 className="form-title">Book Your Stay</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>

              {submitStatus === "success" && (
                <div className="success-message">
                  ✅ Thank you! Your booking request has been received. Check
                  your email for a confirmation — we'll be in touch within 24
                  hours to confirm availability.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  ❌ Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="packageType">Package</label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a package (optional)</option>
                    <option value="Weekend Getaway (₹1,800 per person)">
                      Weekend Getaway (₹1,800 per person)
                    </option>
                    <option value="Celebration Package (Contact for price)">
                      Celebration Package (Contact for price)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Check-in &amp; Check-out Dates</label>
                  <BookingCalendar
                    checkIn={formData.checkIn}
                    checkOut={formData.checkOut}
                    onChange={handleDatesChange}
                  />
                  {(formData.checkIn || formData.checkOut) && (
                    <p className="booking-dates-summary">
                      {formData.checkIn || "Select check-in"} →{" "}
                      {formData.checkOut || "Select check-out"}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Let us know about any special requirements or questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Booking Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
