import React, { useEffect, useState } from "react";
import "./Header.css";
import instagram from "../../images/insta.png";
import location from "../../images/location.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page after navigation
    window.scrollTo(0, 0);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <h1>RFV</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Photos" className="nav-link">
            Gallery
          </Link>
          <Link to="/AboutUs" className="nav-link">
            About Us
          </Link>
          <Link to="/Services" className="nav-link">
            Services
          </Link>
          <Link to="/ContactUs" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="header-social">
          <button
            className="social-btn"
            onClick={() =>
              handleSocialClick(
                "https://www.facebook.com/profile.php?id=61580996151085"
              )
            }
            aria-label="Visit our Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            className="social-btn"
            onClick={() =>
              handleSocialClick("https://www.instagram.com/rusticfarmvilla/")
            }
            aria-label="Visit our Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </button>
          <button
            className="social-btn"
            onClick={() =>
              handleSocialClick(
                "https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu"
              )
            }
            aria-label="View our location"
          >
            <img src={location} alt="Location" />
          </button>
        </div>

        {/* Book Now Button */}
        <Link to="/ContactUs" className="book-now-btn">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/Photos"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/AboutUs"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/Services"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/ContactUs"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
