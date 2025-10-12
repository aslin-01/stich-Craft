import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/PageNotFound.css"; // 👈 Import responsive CSS

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHover = (e) => {
    e.target.style.background = "linear-gradient(180deg, #917f51, #eedb7f)";
    e.target.style.color = "black";
  };

  const handleLeave = (e) => {
    e.target.style.background = "linear-gradient(180deg, #eedb7f, #917f51 )";
    e.target.style.color = "white";
  };

  return (
    <div className="pnf-container">
      <h1 className="pnf-h1">404</h1>
      <h2 className="pnf-h2">Page Not Found</h2>
      <p className="pnf-p">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="pnf-button"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
