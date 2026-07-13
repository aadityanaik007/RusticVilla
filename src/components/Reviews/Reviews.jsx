import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-page">
      <Seo
        title="Guest Reviews"
        description="Read real Google reviews from guests who have stayed at Rustic Farm Villa in Mandva, Wada — a top-rated farmhouse getaway near Mumbai."
        path="/reviews"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Rustic Farm Villa",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3",
          },
        }}
      />
      <Header />
      <GoogleReviews />
      <Footer />
    </div>
  );
};

export default Reviews;
