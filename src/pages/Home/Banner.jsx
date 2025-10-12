import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // React Router Link
import "../../style/Home/Banner.css";
import img1 from "../../assets/34.jpg";
import img2 from "../../assets/12.jpg";
import img3 from "../../assets/34.jpg";
import img4 from "../../assets/12.jpg";

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
    link: "/contact",
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
          <Link to={slides[current].link} className="btn-small">
            {slides[current].button}
          </Link>
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
    </section>
  );
};

export default Banner;
