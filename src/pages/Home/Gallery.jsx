import React, { useState } from "react";
import "../../style/Home/Gallery.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const images = [
  "https://picsum.photos/id/1011/400/300",
  "https://picsum.photos/id/1012/400/300",
  "https://picsum.photos/id/1013/400/300",
];

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
      {/* Golden bubbles overlay */}
      <div className="gallery-bubble-container">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span key={idx} className="gallery-bubble"></span>
        ))}
      </div>

      <Container className="gallery-container-unique">
        {/* Section Heading */}
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

        {/* Gallery Images */}
        <Row className="gallery-grid-unique">
          {images.map((img, idx) => (
            <Col md={4} key={idx} className="gallery-col-unique">
              <div
                className="gallery-item-unique"
                onClick={() => handleClick(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="gallery-img-unique"
                />
                <div className="overlay">
                  <span className="plus-icon">+</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Button */}
        <div className="gallery-action-unique">
          <button className="gallery-button-unique" onClick={handleExploreMore}>
            Want to see the full collection
            <span className="gallery-arrow-unique">→</span>
          </button>
        </div>

        {/* Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          dialogClassName="gallery-modal-unique"
          contentClassName="border-0 position-relative"
        >
          <button
            className="gallery-close-btn-unique"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>

          <Modal.Body className="text-center">
            <img
              src={selectedImg}
              alt="Selected"
              className="gallery-modal-img-unique"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Gallery;
