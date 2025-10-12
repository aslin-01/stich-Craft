import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/Home/Testimonials.css";

const testimonials = [
  {
    name: "Sophia Lee",
    location: "Chennai, India",
    text: "Unique designs and excellent service. I loved every detail!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "David John",
    location: "Bangalore, India",
    text: "Professional and quick. The quality exceeded my expectations.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Clark",
    location: "Mumbai, India",
    text: "Super happy with my order! Will definitely recommend.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Michael Brown",
    location: "Hyderabad, India",
    text: "The embroidery work was simply stunning and detailed.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
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
      <p class="testimonial-description">
        We value our customers' feedback and love sharing their stories. Here's
        what they have to say about their experience with us.
      </p>

      <div className="testimonial-carousel-wrapper">
        {/* Left arrow outside the card */}
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
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-avatar"
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

        {/* Right arrow outside the card */}
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
