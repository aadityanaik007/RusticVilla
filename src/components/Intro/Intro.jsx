import React from "react";
import "./Intro.css";
import livingRoom from "../../images/villa_images/living_room.jpeg";
import { Link } from "react-router-dom";

const Intro = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".Body");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="intro-container">
      <div className="hero-background">
        <img src={livingRoom} alt="Rustic Farm Villa" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Rustic Farm Villa</h1>
          <p className="hero-subtitle">
            Exceptional design. Extraordinary service.
          </p>
          <div className="hero-description">
            <p>
              Experience luxury in the heart of nature. Our villa offers the
              perfect blend of rustic charm and modern comfort, creating
              unforgettable memories for you and your loved ones.
            </p>
          </div>
          <div className="hero-buttons">
            <Link to="/ContactUs" className="btn-primary">
              Book Your Stay
            </Link>
            <Link to="/Photos" className="btn-secondary">
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
