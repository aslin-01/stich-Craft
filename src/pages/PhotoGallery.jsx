import React, { useState } from "react";
import "../style/PhotoGallery.css";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Designs",
  "Bridal Aari",
  "Blouse Patterns",
  "Tops",
  "Kids Wear",
  "Handmade-Jewels", // ✅ changed from "Traditional Motifs"
];

const photos = [
  {
    src: "./src/assets/23.jpg",
    category: "Blouse Patterns",
    name: "Royal Blouse",
  },
  {
    src: "./src/assets/handmade-01.jpg",
    category: "Handmade-Jewels",
    name: "Lotus Motif",
  }, // ✅ updated
  {
    src: "./src/assets/handmade-02.jpg",
    category: "Handmade-Jewels",
    name: "./src/assets/handmade-02.jpg",
  }, // ✅ updated
  {
    src: "./src/assets/handmade-03.jpg",
    category: "Handmade-Jewels",
    name: "Lotus Motif",
  }, // ✅ updated
  {
    src: "./src/assets/handmade-04.jpg",
    category: "Handmade-Jewels",
    name: "Lotus Motif",
  }, // ✅ updated
  {
    src: "./src/assets/handmade-05.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  {
    src: "./src/assets/handmade-06.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  {
    src: "./src/assets/handmade-07.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  {
    src: "./src/assets/handmade-08.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  {
    src: "./src/assets/handmade-09.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  {
    src: "./src/assets/handmade-010.jpg",
    category: "Handmade-Jewels",
    name: "Peacock Design",
  },
  //  bridal arri

  {
    src: "./src/assets/bridal-1 (1).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (2).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (3).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (4).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (5).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (6).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (7).webp",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (8).jpg",
    category: "Bridal Aari",
    name: "Golden Aari Work",
  },
  {
    src: "./src/assets/bridal-1 (9).jpg",
    category: "Bridal Aari",
    name: "Wedding Zari",
  },
  {
    src: "./src/assets/bridal-1 (10).webp",
    category: "Bridal Aari",
    name: "Bridal Elegance",
  },
  {
    src: "./src/assets/qq.jpg",
    category: "Blouse Patterns",
    name: "Silk Blouse Style",
  },
  // ✅ updated

  {
    src: "./src/assets/qqqqq.jpg",
    category: "Blouse Patterns",
    name: "Floral Neckline",
  },
  { src: "./src/assets/q.jpg", category: "Tops", name: "Casual Top Design" },
  {
    src: "./src/assets/qq.jpg",
    category: "Kids Wear",
    name: "Kids Festive Wear",
  },
];

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Designs");
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const navigate = useNavigate();

  const filteredPhotos =
    activeCategory === "All Designs"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const handleClick = (photo) => {
    setSelectedImg(photo);
    setShowModal(true);
  };

  return (
    <div className="gallery-container" id="photo-gallery">
      <h3 className="gallery__welcome">Elegance in Every Stitch</h3>
      <h2 className="title">
        OUR AARI WORK <span className="color">GALLERY</span>
      </h2>
      <p className="text">
        Discover our Aari embroidery collection featuring bridal work, blouse
        patterns, tops, kids wear, and handmade motifs — each design crafted
        with elegance and precision.
      </p>

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

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div
            className="photo-card"
            key={index}
            onClick={() => handleClick(photo)}
          >
            <img src={photo.src} alt={photo.name} />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="image-modal"
        contentClassName="border-0 position-relative"
      >
        <button className="close-btn" onClick={() => setShowModal(false)}>
          ×
        </button>

        <Modal.Body className="text-center p-0">
          <div className="modal-card">
            <img
              src={selectedImg?.src}
              alt={selectedImg?.name}
              className="modal-img"
            />
            <div className="modal-name">{selectedImg?.name}</div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PhotoGallery;
