import React, { useEffect, useState } from "react";
import "./Header.css";
import instagram from "../../images/insta.png";
import location from "../../images/location.png";
import logo from "../../images/logo/logo.jpeg";
import { Link } from "react-router-dom";
import { TEXT_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText } from "../../context/SiteContentContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const facebookUrl = useSiteText(
    "contact.facebook_url",
    TEXT_DEFAULTS["contact.facebook_url"]
  );
  const instagramUrl = useSiteText(
    "contact.instagram_url",
    TEXT_DEFAULTS["contact.instagram_url"]
  );
  const mapsUrl = useSiteText("contact.maps_url", TEXT_DEFAULTS["contact.maps_url"]);

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
            <img src={logo} alt="Rustic Farm Villa" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/stay" className="nav-link">
            Stay
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/packages" className="nav-link">
            Packages
          </Link>
          <Link to="/reviews" className="nav-link">
            Reviews
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="header-social">
          <button
            className="social-btn"
            onClick={() => handleSocialClick(facebookUrl)}
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
            onClick={() => handleSocialClick(instagramUrl)}
            aria-label="Visit our Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </button>
          <button
            className="social-btn"
            onClick={() => handleSocialClick(mapsUrl)}
            aria-label="View our location"
          >
            <img src={location} alt="Location" />
          </button>
        </div>

        {/* Book Now Button */}
        <Link to="/contact" className="book-now-btn">
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
          to="/about"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/stay"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Stay
        </Link>
        <Link
          to="/gallery"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/packages"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Packages
        </Link>
        <Link
          to="/reviews"
          className="mobile-nav-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Reviews
        </Link>
        <Link
          to="/contact"
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
