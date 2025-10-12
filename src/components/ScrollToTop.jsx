import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      {/* Inline CSS */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 20px;
          right: 20px;
          background-color: black;
          color: #25d366;
          border-radius: 50%;
          font-size: 30px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          background-color: black;
          color: yellow;
          transform: scale(1.1);
        }

        /* Tooltip styles */
        .whatsapp-tooltip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          right: 70px; /* place tooltip left of button */
          background: black;
          color: yellow;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          transition: opacity 0.3s ease;
        }

        .whatsapp-float:hover .whatsapp-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
