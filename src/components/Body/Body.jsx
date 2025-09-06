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
            "Nestled in the heart of nature, Rustic Farm Villa offers an escape
            from the ordinary. Our thoughtfully designed spaces blend rustic
            charm with modern luxury, creating an atmosphere of tranquil
            sophistication that rejuvenates the soul."
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
            "Experience the authentic charm of rural Maharashtra at Rustic Farm
            Villa. Discover serene landscapes, traditional architecture, and
            modern comforts that create unforgettable memories in the heart of
            Mandwa, Wada."
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
            "Nestled in the serene hills of Mandwa, Wada, our villa offers a
            perfect escape from city life. Surrounded by lush greenery and
            scenic landscapes, experience authentic rural charm with modern
            luxury amenities."
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
              "Rustik Stay is a beautiful farmhouse designed with folk art
              elements, featuring charming Warli stencil work that adds a
              traditional touch. The attic (mezzanine floor) brought back
              childhood memories of a cozy treehouse, filled with soft toys and
              warmth. The above-ground plunge pool was clean and relaxing - just
              what we needed. Everything, from the lamps to the shower and AC,
              worked flawlessly. Thoughtful little details throughout the house
              added extra comfort. The food was delicious and homely. The
              caretaker was like a genie - warm, caring and always available at
              the beck of a call. A perfect monsoon getaway for peace, nature,
              and quiet moments. Truly a must-visit!"
            </div>
            <div className="review-author">
              <div className="author-avatar">TS</div>
              <div className="author-info">
                <div className="author-name">Trupti Salgaonkar</div>
                <div className="author-location">Verified Guest</div>
              </div>
            </div>
          </div>
          <div className="review-card" id="review2">
            <div className="review-stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="review-text">
              "Homely environment, nice food, good hospitality - exactly the
              place where you can relax calmly. It was a wonderful birthday
              arrangement done for my niece. The villa's rustic charm combined
              with modern amenities made our stay memorable. The staff went
              above and beyond to ensure we had everything we needed. Thanks to
              the Rustic Villa Team for such an amazing experience!"
            </div>
            <div className="review-author">
              <div className="author-avatar">RT</div>
              <div className="author-info">
                <div className="author-name">Rekha Thakur-Talawdekar</div>
                <div className="author-location">Family Celebration</div>
              </div>
            </div>
          </div>
          <div className="review-card" id="review3">
            <div className="review-stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="review-text">
              "Excellent stay with neat and clean bedding throughout. The view
              is absolutely awesome and the food tasted fantastic. The caretaker
              is very much appreciated and approachable - always ready to help
              with a smile. The villa offers the perfect blend of comfort and
              nature. The peaceful surroundings and well-maintained facilities
              made our weekend getaway truly special."
            </div>
            <div className="review-author">
              <div className="author-avatar">VK</div>
              <div className="author-info">
                <div className="author-name">Vishakha Kadam</div>
                <div className="author-location">Weekend Getaway</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-cta">
          <a
            href="https://maps.app.goo.gl/nt2dkR2vvf48SLow9?g_st=awb"
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
