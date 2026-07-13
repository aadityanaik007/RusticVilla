import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import "./AboutUs.css";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText, useSiteImage } from "../../context/SiteContentContext";

const AboutUs = () => {
  const heroSubtitle = useSiteText(
    "about.hero.subtitle",
    TEXT_DEFAULTS["about.hero.subtitle"]
  );
  const storyParagraph1 = useSiteText(
    "about.story.paragraph1",
    TEXT_DEFAULTS["about.story.paragraph1"]
  );
  const storyParagraph2 = useSiteText(
    "about.story.paragraph2",
    TEXT_DEFAULTS["about.story.paragraph2"]
  );
  const vintageParagraph1 = useSiteText(
    "about.vintage.paragraph1",
    TEXT_DEFAULTS["about.vintage.paragraph1"]
  );
  const vintageParagraph2 = useSiteText(
    "about.vintage.paragraph2",
    TEXT_DEFAULTS["about.vintage.paragraph2"]
  );
  const storyImage = useSiteImage("about.story", IMAGE_DEFAULTS["about.story"]);
  const vintageImage = useSiteImage(
    "about.vintage",
    IMAGE_DEFAULTS["about.vintage"]
  );

  return (
    <div className="about-page">
      <Seo
        title="About Us"
        description="Learn the story behind Rustic Farm Villa — a vintage-inspired farmhouse in Wada, Palghar, Maharashtra, blending rustic charm with modern luxury amid nature."
        path="/about"
      />
      <Header />
      <div className="hero-section-about">
        <div className="hero-content-about">
          <h1 className="hero-title-about">About Rustic Farm Villa</h1>
          <p className="hero-subtitle-about">{heroSubtitle}</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <div className="section-content">
              <p>{storyParagraph1}</p>

              <p>{storyParagraph2}</p>
            </div>
          </div>
          <div className="about-image">
            <img src={storyImage.src} alt={storyImage.alt} />
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-image">
            <img src={vintageImage.src} alt={vintageImage.alt} />
          </div>
          <div className="about-text">
            <h2 className="section-title">Vintage Charm</h2>
            <div className="section-content">
              <p>{vintageParagraph1}</p>

              <p>{vintageParagraph2}</p>
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
