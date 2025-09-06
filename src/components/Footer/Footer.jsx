import React from "react";
import "./Footer.css";
import instagram from "../../images/insta.png";
import location from "../../images/location.png";
import { Link } from "react-router-dom";

const Footer = () => {
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
            Experience luxury and tranquility at Rustic Farm Villa
          </p>
          <Link to="/ContactUs" className="footer-cta-btn">
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
              <h3>Rustic Farm Villa</h3>
            </Link>
            <p className="footer-description">
              Escape to luxury in the heart of nature. Where rustic charm meets
              modern elegance for an unforgettable experience.
            </p>
            <div className="footer-social">
              <button
                className="social-icon"
                onClick={() =>
                  handleSocialClick(
                    "https://www.instagram.com/rustic.farm.villa?igshid=YTQwZjQ0NmI0OA=="
                  )
                }
                aria-label="Follow us on Instagram"
              >
                <img src={instagram} alt="Instagram" />
              </button>
              <button
                className="social-icon"
                onClick={() =>
                  handleSocialClick(
                    "https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu"
                  )
                }
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
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Photos">Gallery</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact</Link>
              </li>
              <li>
                <div className="footer-link">Services</div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4>Our Services</h4>
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
              <p>📍 Wada, Mandwa, Maharashtra</p>
              <p>📞 +91 8108266499</p>
              <p>✉️ info@rusticfarmvilla.com</p>
            </div>
            <Link to="/ContactUs" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Rustic Farm Villa. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
