import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import "../style/Navbar.css";

const Logo = () => {
  return (
    <div className="logo-container">
      {/* Logo */}
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="Logo"
          className="logo-animate"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Company Name */}
      <span className="company-name">StitchCraft_Artistry</span>
    </div>
  );
};

const NavigationBar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      expand="lg"
      className="navbar-custom"
      variant="dark"
      sticky="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className={`nav-link-animate ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setExpanded(false)}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
