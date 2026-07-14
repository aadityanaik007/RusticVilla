import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.jpeg";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText, useSiteImage } from "../../context/SiteContentContext";

const Intro = () => {
  const heroQuote = useSiteText(
    "home.hero.quote",
    TEXT_DEFAULTS["home.hero.quote"],
  );
  const heroImage = useSiteImage("home.hero", IMAGE_DEFAULTS["home.hero"]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".Body");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="intro-container">
      <div className="intro-splash" aria-hidden="true">
        <img src={logo} alt="" className="intro-splash-logo" />
      </div>
      <div className="hero-background">
        <img src={heroImage.src} alt={heroImage.alt} className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">The Rustic Farm Villaa</h1>
          <p className="hero-quote">{heroQuote}</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Book Your Stay
            </Link>
            <Link to="/gallery" className="btn-secondary">
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default Intro;
