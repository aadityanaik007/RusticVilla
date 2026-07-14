import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import "./Packages.css";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText, useSiteImage } from "../../context/SiteContentContext";

const Packages = () => {
  const heroImage = useSiteImage("packages.hero", IMAGE_DEFAULTS["packages.hero"]);
  const weekendTagline = useSiteText(
    "packages.weekend.tagline",
    TEXT_DEFAULTS["packages.weekend.tagline"]
  );
  const weekendPrice = useSiteText(
    "packages.weekend.price",
    TEXT_DEFAULTS["packages.weekend.price"]
  );
  const celebrationTagline = useSiteText(
    "packages.celebration.tagline",
    TEXT_DEFAULTS["packages.celebration.tagline"]
  );
  const weekendImage = useSiteImage(
    "packages.weekend",
    IMAGE_DEFAULTS["packages.weekend"]
  );
  const celebrationImage = useSiteImage(
    "packages.celebration",
    IMAGE_DEFAULTS["packages.celebration"]
  );

  const packages = [
    {
      name: "Weekend Getaway",
      image: weekendImage,
      imagePosition: "center 28%",
      tagline: weekendTagline,
      price: weekendPrice,
      priceNote: "1 night stay",
      inclusions: [
        "1-night stay in a private bedroom",
        "Breakfast, lunch & dinner",
        "Bonfire evening",
        "Pool & sports access",
      ],
      cta: "Book Now",
    },
    {
      name: "Celebration Package",
      image: celebrationImage,
      tagline: celebrationTagline,
      inclusions: [
        "Themed decoration & setup",
        "Music system / DJ arrangement",
        "Custom catering & cake",
        "Dedicated event coordination",
      ],
      cta: "Contact for Pricing",
    },
  ];

  return (
    <div className="packages-page">
      <Seo
        title="Packages"
        description="Explore the Weekend Getaway (₹1,800 per person) and Celebration packages at Rustic Farm Villaa. Contact us for custom pricing and availability."
        path="/packages"
      />
      <Header />

      <div className="packages-hero">
        <img src={heroImage.src} alt={heroImage.alt} className="packages-hero-bg" />
        <div className="packages-hero-overlay"></div>
        <div className="packages-hero-content">
          <h1 className="packages-hero-title">Packages</h1>
          <p className="packages-hero-subtitle">
            Curated experiences for every kind of getaway
          </p>
        </div>
      </div>

      <div className="packages-container">
        <div className="packages-intro">
          <h2>Find the Right Fit for Your Visit</h2>
          <p>
            Whether it's a relaxed weekend or a milestone celebration — we
            tailor every package to your group size and occasion. Reach out
            and we'll share current pricing and availability.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-image">
                <img
                  src={pkg.image.src}
                  alt={pkg.name}
                  loading="lazy"
                  style={{ objectPosition: pkg.imagePosition || "center" }}
                />
              </div>
              <div className="package-body">
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>
                {pkg.price && (
                  <div className="package-price">
                    <span className="package-price-amount">{pkg.price}</span>
                    {pkg.priceNote && (
                      <span className="package-price-note">
                        {pkg.priceNote}
                      </span>
                    )}
                  </div>
                )}
                <ul className="package-inclusions">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="package-cta">
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="packages-cta">
          <div className="cta-content">
            <h2>Not Sure Which Package Suits You?</h2>
            <p>
              Tell us about your group size, dates, and occasion — we'll help
              you put together the perfect stay.
            </p>
            <Link to="/contact" className="cta-button">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
