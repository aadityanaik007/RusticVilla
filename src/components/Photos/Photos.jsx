import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import "./Photos.css";
import { IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useGalleryPhotos, useSiteImage } from "../../context/SiteContentContext";
// Gallery Images
import droneShot from "../../images/new_images/drone_shot.jpeg";
import bonfire1 from "../../images/bonfire/bonfire-1.jpg";
import bonfireGathering from "../../images/bonfire/people-get-togetther.jpeg";
import dinningTable from "../../images/GalleryImages/diningTable.jpeg";
import group1 from "../../images/GalleryImages/group1.jpeg";
import kid1 from "../../images/GalleryImages/kid1.jpeg";
import outdoor1 from "../../images/GalleryImages/outdoor1.jpeg";
import outdoor2 from "../../images/GalleryImages/outdoor2.jpeg";
import outdoor3 from "../../images/GalleryImages/outdoor3.jpeg";
import outdoor4 from "../../images/GalleryImages/outdoor4.jpeg";
import outdoor5 from "../../images/GalleryImages/outdoor5.jpeg";
import outdoor6 from "../../images/GalleryImages/outdoor6.jpeg";
import poolAerial from "../../images/outside/pool.jpg";
import poolEvening from "../../images/outside/pool-2.jpg";
import poolNight from "../../images/outside/pool-3.jpg";
import swing from "../../images/outside/swing.jpg";
import tent1 from "../../images/GalleryImages/tent1.jpeg";
import tent2 from "../../images/GalleryImages/tent2.jpeg";
// Villa Images
import bedroom1 from "../../images/villa_images/bedroom1.jpeg";
import blackSheetBDR from "../../images/villa_images/blackSheetBDR.jpeg";
import foodPlate from "../../images/food/food-in-a-plate.jpeg";
import foodMenu from "../../images/food/food-menu.jpg";
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg";
import livingRoom from "../../images/villa_images/living_room.jpeg";
// First Floor Images
import animals from "../../images/FirstFloor/animals.jpeg";
import doll2 from "../../images/FirstFloor/doll2.jpeg";
import doll3 from "../../images/FirstFloor/doll3.jpeg";
import doll4 from "../../images/FirstFloor/doll4.jpeg";
import dolls from "../../images/FirstFloor/dolls.jpeg";
import miniatures from "../../images/FirstFloor/miniatures.jpeg";
import teddy2 from "../../images/FirstFloor/teddy2.jpeg";
import teddybear from "../../images/FirstFloor/teddybear.jpeg";

const SWIPE_THRESHOLD = 50;

const Photos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const touchStartX = useRef(null);
  const { galleryPhotos } = useGalleryPhotos();
  const heroImage = useSiteImage("gallery.hero", IMAGE_DEFAULTS["gallery.hero"]);

  const adminGalleryImages = galleryPhotos.map((photo) => ({
    src: photo.url,
    alt: photo.alt || "Rustic Farm Villaa",
    category: photo.category,
  }));

  const galleryImages = [
    // Interior Spaces
    { src: livingRoom, alt: "Luxurious Living Room", category: "interior" },
    { src: lightBGBedroom, alt: "Bright & Airy Bedroom", category: "interior" },
    { src: blackSheetBDR, alt: "Elegant Master Bedroom", category: "interior" },
    { src: bedroom1, alt: "Comfortable Guest Room", category: "interior" },
    { src: dinningTable, alt: "Elegant Dining Area", category: "interior" },

    // Outdoor Spaces
    { src: droneShot, alt: "Aerial View of the Pool & Villa Grounds", category: "outdoor" },
    { src: outdoor1, alt: "Beautiful Pool Area", category: "outdoor" },
    { src: outdoor2, alt: "Garden & Landscape", category: "outdoor" },
    { src: outdoor3, alt: "Outdoor Seating Area", category: "outdoor" },
    { src: outdoor4, alt: "Villa Exterior View", category: "outdoor" },
    { src: outdoor5, alt: "Peaceful Garden Space", category: "outdoor" },
    { src: outdoor6, alt: "Natural Surroundings", category: "outdoor" },
    { src: poolAerial, alt: "Aerial View of the Private Pool", category: "outdoor" },
    { src: poolEvening, alt: "Pool Deck at Dusk", category: "outdoor" },
    { src: poolNight, alt: "Pool Area Lit Up at Night", category: "outdoor" },
    { src: swing, alt: "Garden Swing at Sunset", category: "outdoor" },

    // Activities & Experiences
    { src: bonfire1, alt: "Bonfire Night at Rustic Farm Villaa", category: "activities" },
    { src: bonfireGathering, alt: "Birthday Celebration Around the Bonfire Hut", category: "activities" },
    { src: tent1, alt: "Camping Experience", category: "activities" },
    { src: tent2, alt: "Outdoor Adventures", category: "activities" },
    { src: group1, alt: "Group Gatherings", category: "activities" },
    { src: kid1, alt: "Family Fun Activities", category: "activities" },

    // Dining & Culinary
    {
      src: foodPlate,
      alt: "Homestyle Thali Meal",
      category: "dining",
      imageFit: "contain",
      bgGradient: "linear-gradient(135deg, rgb(230, 221, 210) 0%, rgb(120, 100, 101) 100%)",
    },
    { src: foodMenu, alt: "Sample Menu at Rustic Farm Villaa", category: "dining" },

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
        description="Browse photos of Rustic Farm Villaa's interiors, outdoor pool area, gardens, activities, dining, and the whimsical first-floor attic in Mandva, Wada."
        path="/gallery"
      />
      <Header />

      <div className="gallery-hero">
        <img src={heroImage.src} alt={heroImage.alt} className="gallery-hero-bg" />
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Photo Gallery</h1>
          <p className="gallery-hero-subtitle">
            Discover the beauty and charm of Rustic Farm Villaa
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
