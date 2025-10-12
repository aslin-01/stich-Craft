import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this line
import "../../style/Home/About.css";
import aboutImg from "../../assets/q.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // ✅ Add this line

  return (
    <section className="about">
      {/* Image Section */}
      <div className="about__image">
        <div className="about__photo">
          <img src={aboutImg} alt="Aari Work" className="floating-img" />
        </div>
      </div>

      {/* Content Section */}
      <div className="about__content">
        <h3 className="about__welcome">Welcome to Aari Elegance</h3>
        <h2 className="about__title">
          About <span className="our-story">Our Story </span>{" "}
        </h2>

        <p className="about__text">
          Aari embroidery is not just an art – it is a heritage passed down
          through generations. At <strong>Aari Elegance</strong>, we blend
          traditional stitches with modern fashion aesthetics.
        </p>

        <p className="about__text">
          Our artisans carefully craft every detail on saree blouses, lehengas,
          gowns, and bridal wear, ensuring each piece is timeless.
        </p>

        <p className="about__text">
          We use only the finest threads, beads, and sequins to create designs
          that are intricate and durable. Each creation reflects our passion for
          excellence.
        </p>

        {showMore && (
          <p className="about__text">
            Every thread tells a story of dedication, patience, and artistry.
            With our customization service, you can bring your dream designs to
            life, combining tradition with elegance for every occasion.
          </p>
        )}

        {/* ✅ Only this block is updated */}
        <button
          className="about__button"
          onClick={() => {
            if (!showMore) {
              navigate("/about");
            } else {
              setShowMore(false);
            }
          }}
        >
          {showMore ? (
            <>
              Show Less <span className="arrow">↑</span>
            </>
          ) : (
            <>
              Read More <span className="arrow">→</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default About;
