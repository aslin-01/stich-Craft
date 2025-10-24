import React from "react";
import { useNavigate } from "react-router-dom"; // 🆕 Add this line
import "../../style/Home/Creation.css";
import img1 from "../../assets/Home/Top1.webp";
import img2 from "../../assets/gallery/handmade/handmade-01.webp";
import img3 from "../../assets/Home/bridal-7.webp";
import img4 from "../../assets/Home/kids1.webp";

const CreationData = [
  {
    src: img1,
    title: "Aari Design Top",
    content:
      "Intricate hand-embroidered Aari work on premium fabric, perfect for festive occasions.",
    price: "₹1,000",
  },
  {
    src: img2,
    title: "Handmade Jewels",
    content:
      "Elegant handmade jewels crafted with precision and passion, blending traditional artistry with a modern touch.",
    price: "₹150",
  },
  {
    src: img3,
    title: "Bridal Blouse",
    content:
      "Exquisite bridal Blouse with detailed beadwork and vibrant colors.",
    price: "₹2,500",
  },
  {
    src: img4,
    title: "Kidswear Dress",
    content:
      "Elegant partywear dress featuring subtle Aari embroidery and a contemporary silhouette.",
    price: "₹1,000",
  },
];

const Creation = () => {
  const navigate = useNavigate(); // 🆕 Add this line

  return (
    <section id="creation" className="gallery">
      {/* Glowing Background Bubbles */}
      <div className="creation-bubble-container">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span key={idx} className="creation-bubble"></span>
        ))}
      </div>

      {/* Section Content */}
      <div className="gallery__content">
        <h3 className="about__welcome">Discover Our Craftsmanship</h3>
        <h2 className="gallery__title">
          OUR <span className="color">CREATIONS</span>
        </h2>
        <p className="gallery__desc">
          Explore our finest Aari embroidery pieces, from elegant sarees and
          bridal lehengas to stylish kurtis and kids’ ethnic wear. Each design
          reflects the skill and passion of our artisans.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery__inner">
        <div className="gallery__grid">
          {CreationData.map((item, index) => (
            <div className="gallery__card" key={index}>
              <img
                src={item.src}
                alt={item.title}
                className="gallery__image"
                loading="lazy"
                decoding="async"
              />
              <div className="gallery__info">
                <h3 className="gallery__card-title">{item.title}</h3>
              </div>
              <div className="gallery__hover-content">
                <p>{item.content}</p>
                <div className="gallery__price">Starts from {item.price}</div>
                <button
                  className="gallery__btn"
                  onClick={() => navigate("/contact")} // 🆕 Add this handler
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creation;
