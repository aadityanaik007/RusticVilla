import React, { useState } from "react";
import "./GoogleReviews.css";
import { reviews, averageRating, googleReviewLink } from "../../data/reviews";

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`gr-star ${index < rating ? "filled" : ""}`}>
      ★
    </span>
  ));
};

const GoogleReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="gr-section">
      <div className="gr-hero">
        <div className="gr-hero-content">
          <div className="gr-hero-badge">
            <span className="gr-google-icon">G</span>
            <span className="gr-badge-text">Google Reviews</span>
          </div>
          <h2 className="gr-hero-title">Loved by Our Guests</h2>
          <div className="gr-hero-rating">
            <div className="gr-rating-display">
              <span className="gr-rating-score">{averageRating}</span>
              <div className="gr-rating-stars">{renderStars(5)}</div>
            </div>
            <p className="gr-rating-text">
              Based on authentic guest experiences
            </p>
          </div>
        </div>
      </div>

      <div className="gr-showcase">
        <div className="gr-showcase-navigation">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`gr-nav-dot ${index === activeReview ? "active" : ""}`}
              onClick={() => setActiveReview(index)}
              aria-label={`View review ${index + 1}`}
            />
          ))}
        </div>

        <div className="gr-showcase-content">
          {(() => {
            const review = reviews[activeReview];
            return (
              <div className="gr-review-showcase active" key={review.id}>
                <div className="gr-review-content">
                  <div className="gr-quote-icon">"</div>
                  <p className="gr-review-quote">{review.text}</p>
                  <div className="gr-review-author">
                    <div className="gr-author-avatar">
                      <span>{review.avatar}</span>
                    </div>
                    <div className="gr-author-info">
                      <h4 className="gr-author-name">{review.name}</h4>
                      <div className="gr-author-meta">
                        <span className="gr-author-location">
                          {review.location}
                        </span>
                        <span className="gr-meta-divider">•</span>
                        <span className="gr-review-date">{review.date}</span>
                      </div>
                      <div className="gr-author-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <div className="gr-cta">
        <div className="gr-cta-content">
          <h3 className="gr-cta-title">Share Your Experience</h3>
          <p className="gr-cta-subtitle">
            Help others discover the magic of Rustic Farm Villaa
          </p>
          <div className="gr-cta-buttons">
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gr-cta-btn primary"
            >
              <span className="gr-btn-icon">👁️</span>
              View All Reviews
            </a>
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gr-cta-btn secondary"
            >
              <span className="gr-btn-icon">✍️</span>
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
