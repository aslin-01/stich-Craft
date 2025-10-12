import React from "react";
import { Link } from "react-router-dom";
import "../../style/Home/ServiceHome.css";
import { FaPaintBrush, FaGem, FaShoppingBag, FaUserTie } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPaintBrush />,
    title: "Custom Aari Design",
    text: "We craft personalized embroidery patterns tailored to your outfit and occasion.",
  },
  {
    id: 2,
    icon: <FaGem />,
    title: "Premium Quality",
    text: "Only the finest threads, beads, and stones are used to ensure elegance and durability.",
  },
  {
    id: 3,
    icon: <FaShoppingBag />,
    title: "Ready-to-Wear Collection",
    text: "Choose from our exclusive collection of Aari embroidered sarees, lehengas, and gowns.",
  },
  {
    id: 4,
    icon: <FaUserTie />,
    title: "Expert Artisans",
    text: "Our skilled craftsmen bring years of traditional expertise into every stitch.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h3 className="about__welcome">Explore Our Expertise</h3>
      <h2 className="services__title">
        OUR <span className="color">SERVICES</span>
      </h2>
      <p className="services__subtitle">
        We bring heritage and style together with authentic Aari embroidery.
      </p>

      <div className="services__grid">
        {services.map((service) => (
          <div key={service.id} className="service__card">
            <div className="service__icon">{service.icon}</div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__text">{service.text}</p>
          </div>
        ))}
      </div>

      {/* BUTTON BELOW CARDS */}
      <div className="services__button-container">
        <Link to="/services">
          <button className="service-button">View All Services</button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
