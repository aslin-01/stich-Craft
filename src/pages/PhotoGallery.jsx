import React, { useState, useMemo, useCallback } from "react";
import "../style/PhotoGallery.css";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// =========================
// ✅ Import Images
// =========================

// Handmade Jewels
import handmade01 from "../assets/gallery/handmade/handmade-01.webp";
import handmade02 from "../assets/gallery/handmade/handmade-02.webp";
import handmade03 from "../assets/gallery/handmade/handmade-03.webp";
import handmade04 from "../assets/gallery/handmade/handmade-04.webp";
import handmade05 from "../assets/gallery/handmade/handmade-05.webp";
import handmade06 from "../assets/gallery/handmade/handmade-06.webp";
import handmade07 from "../assets/gallery/handmade/handmade-07.webp";
import handmade08 from "../assets/gallery/handmade/handmade-08.webp";
import handmade09 from "../assets/gallery/handmade/handmade-09.webp";
import handmade10 from "../assets/gallery/handmade/handmade-010.webp";

// Bridal Aari
import bridal1 from "../assets/gallery/bridal/bridal1.webp";
import bridal2 from "../assets/gallery/bridal/bridal2.webp";
import bridal3 from "../assets/gallery/bridal/bridal3.webp";
import bridal4 from "../assets/gallery/bridal/bridal4.webp";
import bridal5 from "../assets/gallery/bridal/bridal5.webp";
import bridal6 from "../assets/gallery/bridal/bridal6.webp";
import bridal7 from "../assets/gallery/bridal/bridal7.webp";
import bridal8 from "../assets/gallery/bridal/bridal8.webp";
import bridal9 from "../assets/gallery/bridal/bridal9.webp";
import bridal10 from "../assets/gallery/bridal/bridal10.webp";

// Blouse Patterns
import blouse1 from "../assets/gallery/blouse/blouse1.webp";
import blouse2 from "../assets/gallery/blouse/blouse2.webp";
import blouse3 from "../assets/gallery/blouse/blouse3.webp";
import blouse4 from "../assets/gallery/blouse/blouse4.webp";
import blouse5 from "../assets/gallery/blouse/blouse5.webp";
import blouse6 from "../assets/gallery/blouse/blouse6.webp";
import blouse7 from "../assets/gallery/blouse/blouse7.webp";
import blouse8 from "../assets/gallery/blouse/blouse8.webp";
import blouse9 from "../assets/gallery/blouse/blouse9.webp";
import blouse10 from "../assets/gallery/blouse/blouse10.webp";

// Tops
import top1 from "../assets/gallery/tops/tops1.webp";
import top2 from "../assets/gallery/tops/tops2.webp";
import top3 from "../assets/gallery/tops/tops3.webp";
import top4 from "../assets/gallery/tops/tops4.webp";
import top5 from "../assets/gallery/tops/tops5.webp";
import top6 from "../assets/gallery/tops/tops6.webp";
import top7 from "../assets/gallery/tops/tops7.webp";
import top8 from "../assets/gallery/tops/tops8.webp";
import top9 from "../assets/gallery/tops/tops9.webp";
import top10 from "../assets/gallery/tops/tops10.webp";

// Kids Wear
import kid1 from "../assets/gallery/kids/kids1.webp";
import kid2 from "../assets/gallery/kids/kids2.webp";
import kid3 from "../assets/gallery/kids/kids3.webp";
import kid4 from "../assets/gallery/kids/kids4.webp";
import kid5 from "../assets/gallery/kids/kids5.webp";
import kid6 from "../assets/gallery/kids/kids6.webp";
import kid7 from "../assets/gallery/kids/kids7.webp";
import kid8 from "../assets/gallery/kids/kids8.webp";


// =========================
// ✅ Categories
// =========================
const categories = [
  "All Designs",
  "Bridal Aari",
  "Blouse Patterns",
  "Tops",
  "Kids Wear",
  "Handmade-Jewels",
];

// =========================
// ✅ Photos
// =========================
const allPhotos = [
  // Handmade Jewels
  ...[
    handmade01,
    handmade02,
    handmade03,
    handmade04,
    handmade05,
    handmade06,
    handmade07,
    handmade08,
    handmade09,
    handmade10,
  ].map((src) => ({ src, category: "Handmade-Jewels" })),

  // Bridal Aari
  ...[
    bridal1,
    bridal2,
    bridal3,
    bridal4,
    bridal5,
    bridal6,
    bridal7,
    bridal8,
    bridal9,
    bridal10,
  ].map((src) => ({ src, category: "Bridal Aari" })),

  // Blouse Patterns
  ...[
    blouse1,
    blouse2,
    blouse3,
    blouse4,
    blouse5,
    blouse6,
    blouse7,
    blouse8,
    blouse9,
    blouse10,
  ].map((src) => ({ src, category: "Blouse Patterns" })),

  // Tops
  ...[top1, top2, top3, top4, top5, top6, top7, top8, top9, top10].map(
    (src) => ({ src, category: "Tops" })
  ),

  // Kids Wear
  ...[kid1, kid2, kid3, kid4, kid5, kid6, kid7, kid8].map(
    (src) => ({ src, category: "Kids Wear" })
  ),
];

// ✅ Randomize photo order (mix handmade, kids, tops, etc.)
const photos = allPhotos.sort(() => Math.random() - 0.5);

// =========================
// ✅ Component
// =========================
const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Designs");
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  // ✅ Filter Photos
  const filteredPhotos = useMemo(() => {
    return activeCategory === "All Designs"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  // ✅ Handlers
  const handleClick = useCallback((photo) => {
    setSelectedImg(photo);
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setSelectedImg(null);
  }, []);

  // =========================
  // ✅ Render
  // =========================
  return (
    <div className="gallery-container" id="photo-gallery">
      <h3 className="gallery__welcome">Elegance in Every Stitch</h3>
      <h2 className="title">
        OUR AARI WORK <span className="color">GALLERY</span>
      </h2>
      <p className="text">
        Discover our Aari embroidery collection featuring bridal work, blouse
        patterns, tops, kids wear, and handmade jewels — each crafted with
        elegance and precision.
      </p>

      {/* ===== Category Tabs ===== */}
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ===== Photo Grid ===== */}
      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div
            className="photo-card"
            key={`${photo.category}-${index}`}
            onClick={() => handleClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.category}
              loading="lazy"
              decoding="async"
              className="gallery-image"
            />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="image-modal"
        contentClassName="border-0 position-relative"
      >
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>
        <Modal.Body className="text-center p-0">
          {selectedImg && (
            <div className="modal-card">
              <img
                src={selectedImg.src}
                alt="Selected Design"
                className="modal-img"
                loading="lazy"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PhotoGallery;
