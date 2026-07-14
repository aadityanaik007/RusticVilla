import React from "react";
import "./Footer.css";
import instagram from "../../images/insta.png";
import location from "../../images/location.png";
import logo from "../../images/logo/logo.jpeg";
import { Link } from "react-router-dom";
import { TEXT_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText } from "../../context/SiteContentContext";

const Footer = () => {
  const description = useSiteText(
    "footer.description",
    TEXT_DEFAULTS["footer.description"]
  );
  const instagramUrl = useSiteText(
    "contact.instagram_url",
    TEXT_DEFAULTS["contact.instagram_url"]
  );
  const mapsUrl = useSiteText("contact.maps_url", TEXT_DEFAULTS["contact.maps_url"]);
  const address = useSiteText("contact.address", TEXT_DEFAULTS["contact.address"]);
  const phone = useSiteText(
    "contact.phone_front_desk",
    TEXT_DEFAULTS["contact.phone_front_desk"]
  );
  const email = useSiteText("contact.email", TEXT_DEFAULTS["contact.email"]);

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Call to Action Section */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <h2 className="footer-cta-title">Ready for Your Perfect Getaway?</h2>
          <p className="footer-cta-subtitle">
            Experience luxury and tranquility at Rustic Farm Villaa
          </p>
          <Link to="/contact" className="footer-cta-btn">
            Book Your Stay
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Rustic Farm Villaa" className="footer-logo-image" />
              <h3>Rustic Farm Villaa</h3>
            </Link>
            <p className="footer-description">{description}</p>
            <div className="footer-social">
              <button
                className="social-icon"
                onClick={() => handleSocialClick(instagramUrl)}
                aria-label="Follow us on Instagram"
              >
                <img src={instagram} alt="Instagram" />
              </button>
              <button
                className="social-icon"
                onClick={() => handleSocialClick(mapsUrl)}
                aria-label="Visit our location"
              >
                <img src={location} alt="Location" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/stay">Stay</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4>Our Amenities</h4>
            <ul>
              <li>Luxury Accommodation</li>
              <li>Fine Dining</li>
              <li>Event Hosting</li>
              <li>Nature Tours</li>
              <li>Spa & Wellness</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>📍 {address}</p>
              <p>
                📞 <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
              </p>
              <p>
                ✉️ <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Rustic Farm Villaa. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
              <Link to="/admin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
