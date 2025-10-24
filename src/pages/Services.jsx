import React, { useEffect, useRef, useState } from "react";
import "../style/Services.css";

// 🖼 Import unique images for each service
import bridalAari from "../assets/service/bridal2.webp";
import maggamWork from "../assets/service/maggam.webp";
import kasuCoin from "../assets/service/coin.webp";
import stoneBead from "../assets/service/stone.webp";
import zardosiCutdana from "../assets/service/zardosi.webp";
import patchwork from "../assets/service/patch work.webp";
import sleeveNeck from "../assets/service/sleve.webp";

// 💎 Service Data
const services = [
  {
    title: "Bridal Aari Blouse Embroidery",
    subtitle: "Luxury Handcrafted Designs",
    description:
      "Exquisite Aari embroidery for bridal blouses, combining traditional motifs and modern elegance to create a stunning visual impact.",
    image: {
      src: bridalAari,
      alt: "Bridal Aari Blouse Embroidery",
    },
  },
  {
    title: "Maggam Work Blouse",
    subtitle: "Artisanal Needlework",
    description:
      "Intricate Maggam embroidery enhancing blouse designs with artistic patterns and detailed needlework for timeless elegance.",
    image: {
      src: maggamWork,
      alt: "Maggam Work Blouse",
    },
  },
  {
    title: "Kasu (Coin) Work Blouse",
    subtitle: "Traditional Metallic Finish",
    description:
      "Rich Kasu coin embroidery adds a luxurious metallic shimmer, perfect for festive and ceremonial attire.",
    image: {
      src: kasuCoin,
      alt: "Kasu Coin Work Blouse",
    },
  },
  {
    title: "Stone & Bead Aari Work",
    subtitle: "Glamour & Sparkle",
    description:
      "Delicate stones and beads enhance your blouse designs with sparkle and sophistication, ideal for weddings and special occasions.",
    image: {
      src: stoneBead,
      alt: "Stone and Bead Aari Work",
    },
  },
  {
    title: "Zardosi & Cutdana Embroidery",
    subtitle: "Heavy Bridal Embellishment",
    description:
      "Ornate Zardosi work combined with Cutdana beads creates a luxurious, statement-making look for bridal and festive blouses.",
    image: {
      src: zardosiCutdana,
      alt: "Zardosi and Cutdana Work",
    },
  },
  {
    title: "Patchwork Aari Designs",
    subtitle: "Creative Fabric Combinations",
    description:
      "Innovative patch embroidery blends fabrics and textures, giving your blouse a unique and contemporary aesthetic.",
    image: {
      src: patchwork,
      alt: "Patchwork Aari Designs",
    },
  },
  {
    title: "Sleeve & Neck Border Embroidery",
    subtitle: "Delicate Finishing Touches",
    description:
      "Beautifully embroidered borders frame sleeves and necklines, adding elegance and refinement to your blouse designs.",
    image: {
      src: sleeveNeck,
      alt: "Sleeve and Neck Border Aari Work",
    },
  },
];

// 🌸 Main Component
const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-header">
        <h3>Intricate Designs, Timeless Elegance</h3>
        <h2>
          Our Exclusive <span className="color">Aari Services</span>
        </h2>
        <p className="text">
          Discover the art of Aari embroidery with our carefully curated
          services. From bridal blouses to creative patchwork, each design is
          crafted with precision, culture, and artistry.
        </p>
      </div>

      {services.map(({ title, subtitle, description, image }, index) => (
        <ServiceSection
          key={index}
          index={index}
          title={title}
          subtitle={subtitle}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

// 🌼 Section Component
const ServiceSection = ({ index, title, subtitle, description, image }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`service-section ${
        index % 2 === 0 ? "left-image" : "right-image"
      } ${
        visible
          ? index % 2 === 0
            ? "slide-in-left"
            : "slide-in-right"
          : "hidden"
      }`}
    >
      <div className="service-text-container">
        <div className="service-number">0{index + 1}</div>
        <h3 className="service-title">{title}</h3>
        <h4 className="service-subtitle">{subtitle}</h4>
        <p className="service-description">{description}</p>
      </div>

      <div className="service-image-container">
        <img
          src={image.src}
          alt={image.alt}
          className="service-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Services;
