import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Navbar.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="Logo" className="logo-animate" />
      <div className="orbit-double"></div>
    </div>
  );
};

const NavigationBar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // ✅ added

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
      expanded={expanded} // ✅ controlled state
      onToggle={(isExpanded) => setExpanded(isExpanded)} // ✅ sync toggle state
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
                onClick={() => setExpanded(false)} // ✅ close toggle after click
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
