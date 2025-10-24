import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/Home/Testimonials.css";

// ✅ Import your local images
import SophiaImg from "../../assets/test-1.webp";
import DavidImg from "../../assets/test-2.webp";
import EmilyImg from "../../assets/test-3.webp";

const testimonials = [
  {
    name: "Aishwarya",
    location: "Trivandrum, India",
    text: "Unique designs and excellent service. I loved every detail!",
    rating: 5,
    image: SophiaImg,
  },
  {
    name: "Abirami",
    location: "Trivandrum, India",
    text: "Professional and quick. The quality exceeded my expectations.",
    rating: 4,
    image: DavidImg,
  },
  {
    name: "Adeline Prisci",
    location: "Chennai, India",
    text: "Super happy with my order! Will definitely recommend.",
    rating: 5,
    image: EmilyImg,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="testimonial-wrapper">
      <h3 className="about__welcome">Happy Clients</h3>
      <h2 className="testimonial-title">
        What <span className="highlight">People Are Saying</span>
      </h2>
      <p className="testimonial-description">
        We value our customers' feedback and love sharing their stories. Here's
        what they have to say about their experience with us.
      </p>

      <div className="testimonial-carousel-wrapper">
        {/* Left arrow */}
        <button
          className="testimonial-arrow outside left"
          onClick={handlePrev}
          aria-label="Previous Testimonial"
        >
          <FaChevronLeft />
        </button>

        <div className="testimonial-carousel">
          <div
            className="testimonial-slider"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                {/* ✅ Local image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="quote-icon-wrapper">
                  <FaQuoteLeft className="quote-icon" />
                </div>

                <p className="testimonial-text">{t.text}</p>

                <div className="testimonial-footer">
                  <h4>{t.name}</h4>
                  <span>{t.location}</span>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={i < t.rating ? "star filled" : "star"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          className="testimonial-arrow outside right"
          onClick={handleNext}
          aria-label="Next Testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
