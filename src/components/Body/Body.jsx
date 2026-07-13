import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { reviews, googleReviewLink } from "../../data/reviews";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText, useSiteImage } from "../../context/SiteContentContext";

const Body = () => {
  const aboutDesc = useSiteText(
    "home.about.description",
    TEXT_DEFAULTS["home.about.description"]
  );
  const tourDesc = useSiteText(
    "home.tour.description",
    TEXT_DEFAULTS["home.tour.description"]
  );
  const amenitiesDesc = useSiteText(
    "home.amenities.description",
    TEXT_DEFAULTS["home.amenities.description"]
  );
  const aboutImage = useSiteImage("home.about", IMAGE_DEFAULTS["home.about"]);
  const tourImage = useSiteImage("home.tour", IMAGE_DEFAULTS["home.tour"]);

  return (
    <div className="Body">
      <div className="image2">
        <img src={aboutImage.src} alt={aboutImage.alt} />
        <div className="image2-description">
          <div className="image2DescTitle">About the Villa</div>
          <div className="image2Desc">"{aboutDesc}"</div>
          <div className="image2LearnMoreBtn">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div id="image3">
        <div id="image3Intro">
          <div id="image3Title">Take a Tour</div>
          <div id="image3Desc">"{tourDesc}"</div>
          <div className="image3LearnMoreBtn">
            <Link
              to="/gallery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View Gallery
            </Link>
          </div>
        </div>
        <div id="image3Image">
          <img
            src={tourImage.src}
            alt={tourImage.alt}
            width="750"
            height="710"
            loading="lazy"
          />
        </div>
      </div>
      <div className="image4 no-image" style={{ marginTop: "3.2rem" }}>
        <div className="image4-description">
          <div className="image4DescTitle">Amenities</div>
          <div className="image4Desc">"{amenitiesDesc}"</div>
          <div className="image4LearnMoreBtn">
            <Link
              to="/stay"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div id="reviews">
        <div className="reviews-header">
          <h2 className="reviews-title">What Our Guests Say</h2>
          <p className="reviews-subtitle">
            Hear from those who have experienced the magic of Rustic Farm Villa
          </p>
        </div>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-stars">
                <span>{"⭐".repeat(review.rating)}</span>
              </div>
              <div className="review-text">{review.text}</div>
              <div className="review-author">
                <div className="author-avatar">{review.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{review.name}</div>
                  <div className="author-location">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-cta">
          <Link to="/reviews" className="reviews-btn">
            Read All Reviews
          </Link>
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-btn"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
