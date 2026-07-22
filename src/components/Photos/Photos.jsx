import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import "./Photos.css";
import { IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { STATIC_GALLERY_PHOTOS } from "../../data/galleryStaticPhotos";
import {
  useGalleryPhotos,
  useHiddenStaticPhotoIds,
  useSiteImage,
} from "../../context/SiteContentContext";

const SWIPE_THRESHOLD = 50;

const Photos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const touchStartX = useRef(null);
  const { galleryPhotos } = useGalleryPhotos();
  const hiddenStaticIds = useHiddenStaticPhotoIds();
  const heroImage = useSiteImage("gallery.hero", IMAGE_DEFAULTS["gallery.hero"]);

  const adminGalleryImages = galleryPhotos.map((photo) => ({
    src: photo.url,
    alt: photo.alt || "The Rustic Farm Villaa",
    category: photo.category,
  }));

  const galleryImages = [
    ...STATIC_GALLERY_PHOTOS.filter((photo) => !hiddenStaticIds.includes(photo.id)),

    // Added via Admin
    ...adminGalleryImages,
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

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    setSelectedIndex((i) => (i + 1) % filteredImages.length);
  };

  const goToPrev = () => {
    setSelectedIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      else if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filteredImages.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="gallery-page">
      <Seo
        title="Gallery"
        description="Browse photos of The Rustic Farm Villaa's interiors, outdoor pool area, gardens, activities, dining, and the whimsical first-floor attic in Mandva, Wada."
        path="/gallery"
      />
      <Header />

      <div className="gallery-hero">
        <img src={heroImage.src} alt={heroImage.alt} className="gallery-hero-bg" />
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Photo Gallery</h1>
          <p className="gallery-hero-subtitle">
            Discover the beauty and charm of The Rustic Farm Villaa
          </p>
        </div>
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
              onClick={() => openLightbox(index)}
              style={image.bgGradient ? { background: image.bgGradient } : undefined}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={image.imageFit ? { objectFit: image.imageFit } : undefined}
              />
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
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous photo"
          >
            &#10094;
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-caption">
              <h3>{selectedImage.alt}</h3>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next photo"
          >
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Photos;
