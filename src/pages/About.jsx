import React, { useEffect } from "react";
import "../style/About.css";
import storyImg from "../../src/assets/about/about-page.webp"; // replace with your image
import { FaLeaf, FaRibbon, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="about-page">
      <section className="about-new" id="about">
        {/* Main Header */}
        <div className="about-header">
          <h3 className="about-curvise">
            Celebrating Craftsmanship in Every Thread
          </h3>

          <h2>
            Welcome to <span className="color">Stitch Craft Aartistry</span>
          </h2>
          <p className="about-subtitle">
            Tradition meets creativity — where every stitch tells a story
          </p>
        </div>

        {/* Story Section */}
        <div className="about-story">
          <div className="story-image">
            <img
              src={storyImg}
              alt="Our Story"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="story-text">
            <h2>Our Journey</h2>
            <p>
              Founded by passionate artisans, Stitch Craft Aartistry is
              dedicated to preserving the centuries-old craft of Aari
              embroidery. We combine traditional skills with contemporary design
              to create timeless pieces that celebrate heritage and innovation.
            </p>

            <h2>Our Mission</h2>
            <p>
              To empower local communities, craft high-quality embroidery, and
              offer designs that bring joy, elegance, and authenticity to every
              customer.
            </p>
          </div>
        </div>

        {/* Values / Features */}
        <div className="about-values">
          <div className="value-card">
            <FaLeaf className="value-icon" />
            <h3>Eco-Friendly Materials</h3>
            <p>
              We use sustainable fabrics and threads to protect the environment.
            </p>
          </div>
          <div className="value-card">
            <FaRibbon className="value-icon" />
            <h3>Exquisite Craftsmanship</h3>
            <p>Every stitch is meticulously crafted to perfection.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Community Driven</h3>
            <p>We support and uplift local artisans and their families.</p>
          </div>
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovative Designs</h3>
            <p>Unique patterns blending tradition with modern aesthetics.</p>
          </div>
        </div>

        {/* Why Choose Us - Timeline Style */}
        <div className="why-choose-us-timeline">
          <h2>
            Why <span className="color">Choose Us?</span>{" "}
          </h2>
          <p className="why-subtitle">
            Experience the perfect blend of tradition, quality, and creativity.
          </p>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-item left">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h4>Trusted Quality</h4>
                <p>
                  Our products undergo strict quality checks for perfection.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h4>Premium Materials</h4>
                <p>We only use top-notch fabrics and threads for durability.</p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h4>Timely Delivery</h4>
                <p>We ensure your orders reach you on time, every time.</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h4>Skilled Artisans</h4>
                <p>
                  Our artisans are experts with years of experience in Aari
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
