import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Seo from "../SEO/Seo";
import "./Stay.css";
import { TEXT_DEFAULTS, IMAGE_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText, useSiteImage } from "../../context/SiteContentContext";

const amenities = [
  { icon: "❄️", title: "Air Conditioning", desc: "Every bedroom is fitted with AC for year-round comfort." },
  { icon: "🚿", title: "Hot Water", desc: "Modern bathrooms with round-the-clock hot water." },
  { icon: "🧺", title: "Housekeeping", desc: "Daily cleaning, fresh linens, and laundry assistance." },
  { icon: "🏊‍♀️", title: "Private Pool Access", desc: "Exclusive access to the above-ground plunge pool." },
  { icon: "🍽️", title: "Home-Style Meals", desc: "Delicious, homely food prepared fresh for every meal." },
  { icon: "🧑‍🍳", title: "Caretaker on Call", desc: "A warm, attentive caretaker available throughout your stay." },
];

const Stay = () => {
  const heroSubtitle = useSiteText(
    "stay.hero.subtitle",
    TEXT_DEFAULTS["stay.hero.subtitle"]
  );
  const roomsIntro = useSiteText(
    "stay.rooms.intro",
    TEXT_DEFAULTS["stay.rooms.intro"]
  );
  const masterDesc = useSiteText(
    "stay.room.master.desc",
    TEXT_DEFAULTS["stay.room.master.desc"]
  );
  const brightDesc = useSiteText(
    "stay.room.bright.desc",
    TEXT_DEFAULTS["stay.room.bright.desc"]
  );
  const annexeDesc = useSiteText(
    "stay.annexe.description",
    TEXT_DEFAULTS["stay.annexe.description"]
  );
  const campingDesc = useSiteText(
    "stay.camping.description",
    TEXT_DEFAULTS["stay.camping.description"]
  );
  const atticDesc = useSiteText(
    "stay.attic.description",
    TEXT_DEFAULTS["stay.attic.description"]
  );
  const diningDesc = useSiteText(
    "stay.dining.description",
    TEXT_DEFAULTS["stay.dining.description"]
  );

  const heroImage = useSiteImage("stay.hero", IMAGE_DEFAULTS["stay.hero"]);
  const masterImage = useSiteImage(
    "stay.room.master",
    IMAGE_DEFAULTS["stay.room.master"]
  );
  const brightImage = useSiteImage(
    "stay.room.bright",
    IMAGE_DEFAULTS["stay.room.bright"]
  );
  const annexeImage = useSiteImage("stay.annexe", IMAGE_DEFAULTS["stay.annexe"]);
  const campingImage = useSiteImage(
    "stay.camping",
    IMAGE_DEFAULTS["stay.camping"]
  );
  const attic1 = useSiteImage("stay.attic.1", IMAGE_DEFAULTS["stay.attic.1"]);
  const attic2 = useSiteImage("stay.attic.2", IMAGE_DEFAULTS["stay.attic.2"]);
  const attic3 = useSiteImage("stay.attic.3", IMAGE_DEFAULTS["stay.attic.3"]);
  const attic4 = useSiteImage("stay.attic.4", IMAGE_DEFAULTS["stay.attic.4"]);
  const diningImage = useSiteImage("stay.dining", IMAGE_DEFAULTS["stay.dining"]);

  const groundFloorRooms = [
    { image: masterImage, title: "Master Bedroom", desc: masterDesc },
    { image: brightImage, title: "Bright & Airy Bedroom", desc: brightDesc },
  ];

  return (
    <div className="stay-page">
      <Seo
        title="Stay"
        description="Explore accommodation at Rustic Farm Villaa — elegant bedrooms, a whimsical first-floor attic, and modern amenities set amid nature in Mandva, Wada."
        path="/stay"
      />
      <Header />

      <div className="stay-hero">
        <img src={heroImage.src} alt={heroImage.alt} className="stay-hero-bg" />
        <div className="stay-hero-overlay"></div>
        <div className="stay-hero-content">
          <h1 className="stay-hero-title">Your Home Away From Home</h1>
          <p className="stay-hero-subtitle">{heroSubtitle}</p>
        </div>
      </div>

      <div className="stay-content">
        <section className="stay-section">
          <h2 className="stay-section-title">Ground Floor Bedrooms</h2>
          <p className="stay-section-intro">{roomsIntro}</p>
          <div className="stay-rooms-grid">
            {groundFloorRooms.map((room, index) => (
              <div key={index} className="stay-room-card">
                <div className="stay-room-image">
                  <img src={room.image.src} alt={room.title} loading="lazy" />
                </div>
                <h3>{room.title}</h3>
                <p>{room.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stay-section annexe-section">
          <div className="annexe-image">
            <img src={annexeImage.src} alt={annexeImage.alt} loading="lazy" />
          </div>
          <div className="annexe-text">
            <h2 className="stay-section-title">The Hearth Annexe</h2>
            <p>{annexeDesc}</p>
          </div>
        </section>

        <section className="stay-section camping-section">
          <div className="camping-text">
            <h2 className="stay-section-title">Camping Tents</h2>
            <p>{campingDesc}</p>
            <ul className="camping-included">
              <li>Comfortable bedding and sleeping setup inside each tent</li>
              <li>Access to shared bathrooms and hot water</li>
              <li>Proximity to the firepit corner for evening hangouts</li>
              <li>Farmhouse meals available on request</li>
            </ul>
          </div>
          <div className="camping-image">
            <img src={campingImage.src} alt={campingImage.alt} loading="lazy" />
          </div>
        </section>

        <section className="stay-section attic-section">
          <div className="attic-text">
            <h2 className="stay-section-title">The First-Floor Attic</h2>
            <p>{atticDesc}</p>
          </div>
          <div className="attic-gallery">
            <img src={attic1.src} alt={attic1.alt} loading="lazy" />
            <img src={attic2.src} alt={attic2.alt} loading="lazy" />
            <img src={attic3.src} alt={attic3.alt} loading="lazy" />
            <img src={attic4.src} alt={attic4.alt} loading="lazy" />
          </div>
        </section>

        <section className="stay-section">
          <h2 className="stay-section-title">Dining</h2>
          <div className="stay-dining">
            <img src={diningImage.src} alt={diningImage.alt} loading="lazy" />
            <p>{diningDesc}</p>
          </div>
        </section>

        <section className="stay-section">
          <h2 className="stay-section-title">Amenities</h2>
          <div className="stay-amenities-grid">
            {amenities.map((item, index) => (
              <div key={index} className="stay-amenity-card">
                <div className="stay-amenity-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="stay-cta">
          <h2>Ready to Book Your Room?</h2>
          <p>Reach out and we'll help you plan the perfect stay.</p>
          <Link to="/contact" className="stay-cta-button">
            Book Your Stay
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stay;
