import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Photos.css";
import dinningTable from "../../images/GalleryImages/diningTable.jpeg";
import outdoor1 from "../../images/GalleryImages/outdoor1.jpeg";
import outdoor2 from "../../images/GalleryImages/outdoor2.jpeg";
import outdoor3 from "../../images/GalleryImages/outdoor3.jpeg";
import outdoor4 from "../../images/GalleryImages/outdoor4.jpeg";
import tent1 from "../../images/GalleryImages/tent1.jpeg";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: dinningTable, alt: "Elegant Dining Area", category: "interior" },
    { src: outdoor1, alt: "Beautiful Outdoor Space", category: "outdoor" },
    { src: outdoor2, alt: "Garden View", category: "outdoor" },
    { src: outdoor3, alt: "Nature Surroundings", category: "outdoor" },
    { src: outdoor4, alt: "Outdoor Activities", category: "outdoor" },
    { src: tent1, alt: "Camping Experience", category: "activities" },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <Header />

      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Photo Gallery</h1>
          <p className="gallery-hero-subtitle">
            Discover the beauty and charm of Rustic Farm Villa
          </p>
        </div>
        <div className="gallery-hero-overlay"></div>
      </div>

      <div className="gallery-intro">
        <div className="gallery-intro-content">
          <h2 className="gallery-intro-title">Take a Visual Tour</h2>
          <p className="gallery-intro-text">
            Immerse yourself in the natural beauty and elegant design of our
            villa. From cozy interiors to breathtaking outdoor spaces, every
            corner offers a unique perspective of luxury and tranquility.
          </p>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <h3>{image.alt}</h3>
                  <p>Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-caption">
              <h3>{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Photos;
