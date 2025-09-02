import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutUs.css";
import prettyBedroom from "../../images/villa_images/prettyBedroom.jpeg";
import livingRoom from "../../images/villa_images/living_room.jpeg";
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="hero-section-about">
        <div className="hero-content-about">
          <h1 className="hero-title-about">About Rustic Farm Villa</h1>
          <p className="hero-subtitle-about">Where nature meets luxury</p>
        </div>
        <div className="hero-overlay-about"></div>
        <img src={livingRoom} alt="Villa Overview" className="hero-bg-about" />
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <div className="section-content">
              <p>
                Welcome to our enchanting villa nestled in the serene outskirts
                of Wada, Palghar, Maharashtra. Surrounded by the breathtaking
                beauty of nature, our villa is a hidden gem situated amidst lush
                greenery and majestic trees.
              </p>

              <p>
                The picturesque location provides a tranquil escape from the
                hustle and bustle of city life, offering a perfect retreat for
                those seeking peace and relaxation.
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src={prettyBedroom} alt="Elegant Bedroom" />
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-image">
            <img src={lightBGBedroom} alt="Comfortable Living" />
          </div>
          <div className="about-text">
            <h2 className="section-title">Vintage Charm</h2>
            <div className="section-content">
              <p>
                As you step into our vintage-inspired villa, you'll be
                captivated by its timeless charm. The architecture exudes a
                classic elegance, creating an atmosphere of warmth and
                nostalgia.
              </p>

              <p>
                The villa is designed to seamlessly blend with its natural
                surroundings, offering guests a unique and immersive experience.
                With spacious interiors and thoughtful detailing, every corner
                tells a story.
              </p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title-center">Experience Nature</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Bonfire Nights</h3>
              <p>
                Spend magical evenings around a crackling bonfire, sharing
                stories and laughter under the starlit sky.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⛺</div>
              <h3>Camping Experience</h3>
              <p>
                For adventure seekers, enjoy camping experiences that allow you
                to connect with nature in a truly magical setting.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Tree Plantation</h3>
              <p>
                Engage in tree plantation activities, contributing to
                environmental preservation and leaving a green legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
