import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Photos.css";
// Gallery Images
import dinningTable from "../../images/GalleryImages/diningTable.jpeg";
import group1 from "../../images/GalleryImages/group1.jpeg";
import kid1 from "../../images/GalleryImages/kid1.jpeg";
import outdoor1 from "../../images/GalleryImages/outdoor1.jpeg";
import outdoor2 from "../../images/GalleryImages/outdoor2.jpeg";
import outdoor3 from "../../images/GalleryImages/outdoor3.jpeg";
import outdoor4 from "../../images/GalleryImages/outdoor4.jpeg";
import outdoor5 from "../../images/GalleryImages/outdoor5.jpeg";
import outdoor6 from "../../images/GalleryImages/outdoor6.jpeg";
import tent1 from "../../images/GalleryImages/tent1.jpeg";
import tent2 from "../../images/GalleryImages/tent2.jpeg";
// Villa Images
import bedroom1 from "../../images/villa_images/bedroom1.jpeg";
import blackSheetBDR from "../../images/villa_images/blackSheetBDR.jpeg";
import food from "../../images/villa_images/food.png";
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg";
import livingRoom from "../../images/villa_images/living_room.jpeg";
import prettyBedroom from "../../images/villa_images/prettyBedroom.jpeg";
// First Floor Images
import animals from "../../images/FirstFloor/animals.jpeg";
import doll2 from "../../images/FirstFloor/doll2.jpeg";
import doll3 from "../../images/FirstFloor/doll3.jpeg";
import doll4 from "../../images/FirstFloor/doll4.jpeg";
import dolls from "../../images/FirstFloor/dolls.jpeg";
import miniatures from "../../images/FirstFloor/miniatures.jpeg";
import teddy2 from "../../images/FirstFloor/teddy2.jpeg";
import teddybear from "../../images/FirstFloor/teddybear.jpeg";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryImages = [
    // Interior Spaces
    { src: livingRoom, alt: "Luxurious Living Room", category: "interior" },
    { src: lightBGBedroom, alt: "Bright & Airy Bedroom", category: "interior" },
    { src: blackSheetBDR, alt: "Elegant Master Bedroom", category: "interior" },
    { src: prettyBedroom, alt: "Cozy Bedroom", category: "interior" },
    { src: bedroom1, alt: "Comfortable Guest Room", category: "interior" },
    { src: dinningTable, alt: "Elegant Dining Area", category: "interior" },

    // Outdoor Spaces
    { src: outdoor1, alt: "Beautiful Pool Area", category: "outdoor" },
    { src: outdoor2, alt: "Garden & Landscape", category: "outdoor" },
    { src: outdoor3, alt: "Outdoor Seating Area", category: "outdoor" },
    { src: outdoor4, alt: "Villa Exterior View", category: "outdoor" },
    { src: outdoor5, alt: "Peaceful Garden Space", category: "outdoor" },
    { src: outdoor6, alt: "Natural Surroundings", category: "outdoor" },

    // Activities & Experiences
    { src: tent1, alt: "Camping Experience", category: "activities" },
    { src: tent2, alt: "Outdoor Adventures", category: "activities" },
    { src: group1, alt: "Group Gatherings", category: "activities" },
    { src: kid1, alt: "Family Fun Activities", category: "activities" },

    // Dining & Culinary
    { src: food, alt: "Delicious Local Cuisine", category: "dining" },

    // First Floor - Toys & Decorations
    {
      src: teddybear,
      alt: "Adorable Teddy Bear Collection",
      category: "firstfloor",
    },
    { src: teddy2, alt: "Plush Teddy Bears", category: "firstfloor" },
    { src: dolls, alt: "Charming Doll Display", category: "firstfloor" },
    { src: doll2, alt: "Decorative Dolls", category: "firstfloor" },
    { src: doll3, alt: "Traditional Doll Collection", category: "firstfloor" },
    { src: doll4, alt: "Artistic Doll Arrangement", category: "firstfloor" },
    { src: animals, alt: "Animal Figurines", category: "firstfloor" },
    { src: miniatures, alt: "Miniature Collection", category: "firstfloor" },
  ];

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "interior", label: "Interior" },
    { key: "outdoor", label: "Outdoor" },
    { key: "activities", label: "Activities" },
    { key: "dining", label: "Dining" },
    { key: "firstfloor", label: "First Floor" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

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

      {/* Category Filter */}
      <div className="gallery-filters">
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                activeFilter === category.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
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
