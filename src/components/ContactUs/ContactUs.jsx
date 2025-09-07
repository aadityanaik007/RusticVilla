import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import locationImg from "../../images/villa_images/locationImg.png";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Debug: Log form data
    console.log("Form Data:", formData);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("rlaXuSR8pVY3LEDbR");

      // Create the default booking message
      const defaultMessage = `Hello,
The person: ${formData.name} wants to book the villa from ${
        formData.checkIn
      } to ${formData.checkOut}. Number of guests: ${
        formData.guests
      }. Here's his phone number ${formData.phone} and his email ID: ${
        formData.email
      }

${formData.message ? `Additional Message: ${formData.message}` : ""}

Best Regards,
Rustic Booking Manager`;

      // EmailJS configuration
      const templateParams = {
        title: "New Booking Request from Rustic Farm Villa Website",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: formData.guests,
        message: defaultMessage,
        to_email: "aadityasnaik007@gmail.com",
      };

      console.log("Sending email with params:", templateParams);

      const result = await emailjs.send(
        "service_q3rccnb", // Your Service ID
        "template_vg4usxr", // Your Template ID
        templateParams
      );

      console.log("Email sent successfully:", result);
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
          message: "",
        });
        setSubmitStatus(""); // Clear success message after form reset
      }, 3000);
    } catch (error) {
      console.error("Detailed error:", error);
      setSubmitStatus("error");

      // Enhanced error logging
      console.error("Error details:", {
        message: error.message,
        text: error.text,
        status: error.status,
        response: error.response,
      });

      // Show detailed error message for debugging
      alert(
        `Email sending failed: ${
          error.text || error.message || "Unknown error"
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
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
                      Near Mandawa Grampanchayat,
                      <br />
                      Mandva, Wada, Maharashtra 421303, India
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+(91) 8108-266-499</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🏨</div>
                  <div className="contact-text">
                    <h3>Front Desk</h3>
                    <p>+(91) 8108266499</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📅</div>
                  <div className="contact-text">
                    <h3>Reservations</h3>
                    <p>+(91) 8108-266-399</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🚗</div>
                  <div className="contact-text">
                    <h3>Airport Transfer</h3>
                    <p>
                      Need transportation? Contact us at
                      <br />
                      +(91) 8452-989-433
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-section">
              <h3>Find Us</h3>
              <div className="map-container">
                <img
                  src={locationImg}
                  alt="Villa Location"
                  className="map-image"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu",
                      "_blank"
                    );
                  }}
                />
                <div className="map-overlay">
                  <p>Click to view in Google Maps</p>
                </div>
              </div>
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
                  ✅ Thank you! Your booking request has been sent successfully.
                  We'll contact you soon!
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in Date</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out Date</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
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
