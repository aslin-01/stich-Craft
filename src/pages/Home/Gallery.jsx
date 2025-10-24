import React, { useState } from "react";
import "../../style/Home/Gallery.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// ✅ Correct image imports
import handmade1 from "../../assets/Home/bridal-3.webp";
import handmade2 from "../../assets/gallery/handmade/handmade-02.webp";
import handmade3 from "../../assets/Home/bridal-12.webp";

const images = [handmade1, handmade2, handmade3];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  const handleClick = (img) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const handleExploreMore = () => {
    setShowModal(false);
    navigate("/gallery");
  };

  return (
    <div className="gallery-page-unique">
      {/* ✨ Golden bubbles overlay */}
      <div className="gallery-bubble-container">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span key={idx} className="gallery-bubble"></span>
        ))}
      </div>

      <Container className="gallery-container-unique">
        {/* Section Header */}
        <div className="gallery-header-unique text-center">
          <h3 className="about__welcome">Experience Art in Every Stitch</h3>
          <h2 className="gallery-title-unique">
            OUR EXQUISITE <span className="color">COLLECTIONS</span>
          </h2>
          <p className="gallery-description-unique">
            Discover a curated selection of handcrafted designs that blend
            tradition with modern elegance. Each piece is made with attention to
            detail and designed to inspire.
          </p>
        </div>

        {/* 🖼️ Gallery Grid */}
        <Row className="gallery-grid-unique">
          {images.map((img, idx) => (
            <Col md={4} key={idx} className="gallery-col-unique">
              <div
                className="gallery-item-unique"
                onClick={() => handleClick(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="gallery-img-unique"
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay">
                  <span className="plus-icon">+</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* 🔘 Button */}
        <div className="gallery-button-wrapper">
          <button className="gallery-button-unique" onClick={handleExploreMore}>
            Want to see the full collection
            <span className="gallery-arrow-unique">→</span>
          </button>
        </div>

        {/* 🪟 Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          dialogClassName="gallery-modal-unique"
        >
          <Modal.Body className="text-center" style={{ position: "relative" }}>
            {/* ✅ Close Button (fixed position, always visible) */}
            <button
              className="gallery-close-btn-unique"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {selectedImg && (
              <img
                src={selectedImg}
                alt="Selected"
                className="gallery-modal-img-unique"
                loading="lazy"
                decoding="async"
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Gallery;
