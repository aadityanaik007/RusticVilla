import React, { useState } from "react";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  // Real customer reviews from Google Maps
  const customerReviews = [
    {
      id: 1,
      name: "Trupti Salgaonkar",
      rating: 5,
      text: "Rustik Stay is a beautiful farmhouse designed with folk art elements, featuring charming Warli stencil work that adds a traditional touch. The attic (mezzanine floor) brought back childhood memories of a cozy treehouse, filled with soft toys and warmth. The above-ground plunge pool was clean and relaxing - just what we needed. Everything, from the lamps to the shower and AC, worked flawlessly. Thoughtful little details throughout the house added extra comfort. The food was delicious and homely. The caretaker was like a genie - warm, caring and always available at the beck of a call. A perfect monsoon getaway for peace, nature, and quiet moments. Truly a must-visit!",
      date: "1 month ago",
      avatar: "TS",
      location: "Verified Guest",
    },
    {
      id: 2,
      name: "Rekha Thakur-Talawdekar",
      rating: 5,
      text: "Homely environment, nice food, good hospitality - exactly the place where you can relax calmly. It was a wonderful birthday arrangement done for my niece. The villa's rustic charm combined with modern amenities made our stay memorable. The staff went above and beyond to ensure we had everything we needed. Thanks to the Rustic Villa Team for such an amazing experience!",
      date: "2 weeks ago",
      avatar: "RT",
      location: "Family Celebration",
    },
    {
      id: 3,
      name: "Vishakha Kadam",
      rating: 5,
      text: "Excellent stay with neat and clean bedding throughout. The view is absolutely awesome and the food tasted fantastic. The caretaker is very much appreciated and approachable - always ready to help with a smile. The villa offers the perfect blend of comfort and nature. The peaceful surroundings and well-maintained facilities made our weekend getaway truly special.",
      date: "3 weeks ago",
      avatar: "VK",
      location: "Weekend Getaway",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ⭐
      </span>
    ));
  };

  const GoogleReviews = () => {
    const [activeReview, setActiveReview] = useState(0);

    // Real customer reviews from Google Maps
    const customerReviews = [
      {
        id: 1,
        name: "Trupti Salgaonkar",
        rating: 5,
        text: "Rustik Stay is a beautiful farmhouse designed with folk art elements, featuring charming Warli stencil work that adds a traditional touch. The attic brought back childhood memories of a cozy treehouse. The plunge pool was clean and relaxing - just what we needed. A perfect monsoon getaway!",
        date: "1 month ago",
        avatar: "TS",
        location: "Verified Guest",
      },
      {
        id: 2,
        name: "Rekha Thakur-Talawdekar",
        rating: 5,
        text: "Homely environment, nice food, good hospitality - exactly the place where you can relax calmly. It was a wonderful birthday arrangement done for my niece. The villa's rustic charm combined with modern amenities made our stay memorable.",
        date: "2 weeks ago",
        avatar: "RT",
        location: "Family Celebration",
      },
      {
        id: 3,
        name: "Vishakha Kadam",
        rating: 5,
        text: "Excellent stay with neat and clean bedding throughout. The view is absolutely awesome and the food tasted fantastic. The caretaker is very much appreciated and approachable - always ready to help with a smile.",
        date: "3 weeks ago",
        avatar: "VK",
        location: "Weekend Getaway",
      },
    ];

    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ));
    };

    return (
      <section className="reviews-section">
        <div className="reviews-hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="google-icon">G</span>
              <span className="badge-text">Google Reviews</span>
            </div>
            <h2 className="hero-title">Loved by Our Guests</h2>
            <div className="hero-rating">
              <div className="rating-display">
                <span className="rating-score">4.9</span>
                <div className="rating-stars">{renderStars(5)}</div>
              </div>
              <p className="rating-text">
                Based on authentic guest experiences
              </p>
            </div>
          </div>
        </div>

        <div className="reviews-showcase">
          <div className="showcase-navigation">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeReview ? "active" : ""}`}
                onClick={() => setActiveReview(index)}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>

          <div className="showcase-content">
            {customerReviews.map((review, index) => (
              <div
                key={review.id}
                className={`review-showcase ${
                  index === activeReview ? "active" : ""
                }`}
              >
                <div className="review-content">
                  <div className="quote-icon">"</div>
                  <p className="review-quote">{review.text}</p>
                  <div className="review-author">
                    <div className="author-avatar">
                      <span>{review.avatar}</span>
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{review.name}</h4>
                      <div className="author-meta">
                        <span className="author-location">
                          {review.location}
                        </span>
                        <span className="meta-divider">•</span>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <div className="author-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-cta">
          <div className="cta-content">
            <h3 className="cta-title">Share Your Experience</h3>
            <p className="cta-subtitle">
              Help others discover the magic of Rustic Farm Villa
            </p>
            <div className="cta-buttons">
              <a
                href="https://maps.app.goo.gl/nt2dkR2vvf48SLow9?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <span className="btn-icon">👁️</span>
                View All Reviews
              </a>
              <a
                href="https://maps.app.goo.gl/nt2dkR2vvf48SLow9?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn secondary"
              >
                <span className="btn-icon">✍️</span>
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default GoogleReviews;
