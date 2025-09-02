import React from "react";
import "./Body.css";
import bedroomBlack from "../../images/villa_images/blackSheetBDR.jpeg";
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg";
import food from "../../images/villa_images/food.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="Body">
      <div className="image2">
        <img src={bedroomBlack} alt="Luxury Bedroom" />
        <div className="image2-description">
          <div className="image2DescTitle">About the Villa</div>
          <div className="image2Desc">
            Nestled in the heart of nature, Rustic Farm Villa offers an escape
            from the ordinary. Our thoughtfully designed spaces blend rustic
            charm with modern luxury, creating an atmosphere of tranquil
            sophistication that rejuvenates the soul.
          </div>
          <div className="image2LearnMoreBtn">
            <Link
              to="/AboutUs"
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
          <div id="image3Desc">
            A stay at the Barbosa is more than a room. Explore a day in the life
            of a community of artists, innovators and travelers.
          </div>
          <div className="image3LearnMoreBtn">
            <Link
              to="/Photos"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View Gallery
            </Link>
          </div>
        </div>
        <div id="image3Image">
          <img src={lightBGBedroom} alt="" srcset="" width="750" height="710" />
        </div>
      </div>
      <div className="image4" style={{ marginTop: "3.2rem" }}>
        <img src={food} alt="" srcset="" width="750" height="710" />
        <div className="image4-description">
          <div className="image4DescTitle" style={{ marginLeft: "10px" }}>
            Amenities
          </div>
          <div className="image4Desc">
            Designed to be a sanctuary in the middle of the city, the Barbosa
            knows that a little comfort goes a long way.
          </div>
          <div className="image4LearnMoreBtn">
            <Link
              to="/Services"
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
          <div className="review-card" id="review1">
            <div className="review-stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="review-text">
              "An absolutely magical experience! The villa exceeded all our
              expectations with its perfect blend of rustic charm and modern
              luxury. The serene environment and exceptional hospitality made
              our stay unforgettable."
            </div>
            <div className="review-author">
              <div className="author-avatar">SM</div>
              <div className="author-info">
                <div className="author-name">Sarah & Michael</div>
                <div className="author-location">Mumbai, India</div>
              </div>
            </div>
          </div>
          <div className="review-card" id="review2">
            <div className="review-stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="review-text">
              "If I could live here permanently, I would! The attention to
              detail, stunning natural surroundings, and world-class amenities
              create a truly extraordinary retreat. We're already planning our
              next visit."
            </div>
            <div className="review-author">
              <div className="author-avatar">AC</div>
              <div className="author-info">
                <div className="author-name">Alexandra Chen</div>
                <div className="author-location">Singapore</div>
              </div>
            </div>
          </div>
          <div className="review-card" id="review3">
            <div className="review-stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="review-text">
              "The perfect escape from city life! Beautiful villa, outstanding
              service, and activities that connect you with nature. The bonfire
              nights and camping experience were highlights of our trip."
            </div>
            <div className="review-author">
              <div className="author-avatar">RP</div>
              <div className="author-info">
                <div className="author-name">Rajesh Patel</div>
                <div className="author-location">Delhi, India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-cta">
          <Link to="/ContactUs" className="reviews-btn">
            Share Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
