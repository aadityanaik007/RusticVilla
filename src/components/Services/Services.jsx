import React from "react";
import "./Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import lightBGBedroom from "../../images/villa_images/lightBGBedroom.jpeg";
import prettyBedroom from "../../images/villa_images/prettyBedroom.jpeg";
import food from "../../images/villa_images/food.png";
import outdoor1 from "../../images/GalleryImages/outdoor1.jpeg";
import outdoor2 from "../../images/GalleryImages/outdoor2.jpeg";
import outdoor3 from "../../images/GalleryImages/outdoor3.jpeg";
import outdoor4 from "../../images/GalleryImages/outdoor4.jpeg";

const Services = () => {
  const services = [
    {
      category: "Pool & Water Activities",
      icon: "🏊‍♀️",
      image: outdoor1,
      items: [
        {
          name: "Private Pool Access & Setup",
          desc: "Exclusive pool use with party decorations, lighting, and music system for celebrations",
        },
        {
          name: "Poolside Services",
          desc: "Food and beverage delivery, daily maintenance, and water games equipment",
        },
      ],
    },
    {
      category: "Sports & Recreation",
      icon: "🏸",
      image: outdoor2,
      items: [
        {
          name: "Badminton & Court Games",
          desc: "Fully equipped court with premium rackets, shuttlecocks, and sports gear",
        },
        {
          name: "Indoor Games",
          desc: "Traditional carom board gaming and fun dart activities with accessories",
        },
      ],
    },
    {
      category: "Entertainment Services",
      icon: "🎵",
      image: outdoor3,
      items: [
        {
          name: "Music & Sound Systems",
          desc: "Professional karaoke setup, DJ services, and high-quality audio equipment for events",
        },
        {
          name: "Event Entertainment",
          desc: "Live music arrangements, theme party planning, and Bollywood nights",
        },
      ],
    },
    {
      category: "Culinary Services",
      icon: "🍽️",
      image: food,
      items: [
        {
          name: "Traditional Indian Cuisine",
          desc: "Authentic regional dishes with custom menu planning based on dietary preferences",
        },
        {
          name: "Special Dining Experiences",
          desc: "BBQ & grilling, special occasion catering, and farm-to-table dining with fresh ingredients",
        },
      ],
    },
    {
      category: "Accommodation Services",
      icon: "🏡",
      image: lightBGBedroom,
      items: [
        {
          name: "Housekeeping & Maintenance",
          desc: "Daily room cleaning, linen change, laundry service, and luggage assistance",
        },
        {
          name: "Guest Services",
          desc: "Concierge support, grocery shopping, transportation, and local area assistance",
        },
      ],
    },
    {
      category: "Events & Celebrations",
      icon: "🎉",
      image: outdoor4,
      items: [
        {
          name: "Special Occasions",
          desc: "Wedding functions, birthday celebrations, and anniversary packages with complete planning",
        },
        {
          name: "Group Events",
          desc: "Corporate retreats, family reunions, and team building activities with meeting spaces",
        },
      ],
    },
    {
      category: "Wellness & Tours",
      icon: "🌿",
      image: prettyBedroom,
      items: [
        {
          name: "Wellness Activities",
          desc: "Yoga sessions, massage therapy, meditation programs, and nature walks in peaceful settings",
        },
        {
          name: "Local Experiences",
          desc: "Sightseeing tours, cultural experiences, adventure activities, and photography services",
        },
      ],
    },
  ];

  return (
    <div className="services-page">
      <Header />

      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Premium Services</h1>
          <p className="services-hero-subtitle">
            Experience luxury and comfort with our comprehensive range of
            services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        <div className="services-intro">
          <h2>What We Offer</h2>
          <p>
            From thrilling water activities to authentic Indian cuisine, from
            exciting games to peaceful wellness sessions - we provide everything
            you need for an unforgettable stay at Rustic Farm Villa.
          </p>
        </div>

        <div className="services-grid">
          {services.map((category, index) => (
            <div key={index} className="service-category">
              <div className="category-image">
                <img src={category.image} alt={category.category} />
                <div className="category-overlay">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.category}</h3>
                </div>
              </div>
              <div className="service-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="service-item">
                    <h4 className="service-name">{item.name}</h4>
                    <p className="service-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h2>Ready to Experience These Services?</h2>
            <p>
              Book your stay now and enjoy all these amazing amenities and
              services
            </p>
            <a href="/ContactUs" className="cta-button">
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
