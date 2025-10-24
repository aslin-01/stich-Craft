// Banner.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // React Router Link
import "../../style/Home/Banner.css";
import img1 from "../../assets/Home/banner1.webp";
import img2 from "../../assets/Home/banner2.webp";
import img3 from "../../assets/Home/banner3.webp";
import img4 from "../../assets/Home/banner4.webp";
import ContactModal from "../Home/ContactModal"; // Make sure path is correct

const slides = [
  {
    id: 1,
    title: "CRAFTED TO PERFECTION",
    subtitle: "Aari embroidery meets futuristic fashion.",
    button: "Explore",
    img: img1,
    link: "/services",
  },
  {
    id: 2,
    title: "BOLD. ELEGANT. UNIQUE.",
    subtitle: "Redefining tradition with modern artistry.",
    button: "Discover",
    img: img2,
    link: "/about",
  },
  {
    id: 3,
    title: "THREADS OF PASSION",
    subtitle: "Every stitch tells your story.",
    button: "Book Now",
    img: img3,
    link: "/contact", // Not used because we open modal
  },
  {
    id: 4,
    title: "HERITAGE REIMAGINED",
    subtitle: "Luxury fashion handcrafted for you.",
    button: "Shop",
    img: img4,
    link: "/gallery",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-future">
      <div className="banner-inner">
        {/* Left side text */}
        <div className="banner-text">
          <h1 key={slides[current].id}>{slides[current].title}</h1>
          <p>{slides[current].subtitle}</p>

          {slides[current].button === "Book Now" ? (
            <button
              className="btn-small"
              onClick={() => setIsModalOpen(true)}
            >
              {slides[current].button}
            </button>
          ) : (
            <Link to={slides[current].link} className="btn-small">
              {slides[current].button}
            </Link>
          )}
        </div>

        {/* Right side image */}
        <div className="banner-image">
          <div
            key={slides[current].id}
            className="image-circle"
            style={{ backgroundImage: `url(${slides[current].img})` }}
          ></div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Banner;
