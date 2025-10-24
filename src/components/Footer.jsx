import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // React Router link
import "../style/Footer.css";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & About */}
        <div className="footer-col">
          <img
            src={logo}
            alt="STITCH CRAFT AARTISTRY Logo"
            className="footer-logo-img"
            loading="lazy"
            decoding="async"
          />
          <p className="footer-about">
            Welcome to <strong className="color">STITCH CRAFT AARTISTRY</strong>{" "}
            – your destination for exquisite Aari embroidery designs and
            hand-crafted artistry. Discover unique patterns, tutorials, and
            supplies for every skill level.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h5 className="color">QUICK LINKS</h5>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="footer-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company Info & Social Links */}
        <div className="footer-col">
          <div className="footer-bot">
            <h5 className="color">COMPANY</h5>
            <p className="footer-info">
              <span className="size">
                <FaMapMarkerAlt className="icon" />
              </span>

              <a
                href="https://www.google.com/maps/place/Manu+Prem+M/@8.2924484,77.2541692,17z/data=!3m1!4b1!4m6!3m5!1s0x3b045590efcb6213:0x2db2fd4d83790292!8m2!3d8.2924484!4d77.2541692!16s%2Fg%2F11bv2l3__7?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-info-text"
              >
                3/65, Kuruvilaikadu, Eraviputhoorkadai, Kattathurai
              </a>
            </p>
            <p className="footer-info">
              <FaEnvelope className="icon" />
              <a
                href="mailto:Stitchcraftartistrystudio@gmail.com"
                className="footer-info-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stitchcraftartistrystudio@gmail.com
              </a>
            </p>

            <p className="footer-info">
              <FaPhoneAlt className="icon" />
              <a href="tel:+91-7200231969" className="footer-info-text">
                +91-7200231969
              </a>
            </p>
          </div>

          <h5 className="color">FOLLOW US</h5>
          <div className="social-icons">
            <a href="# " className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/stitchcraft_artistry"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          <span className="color">© 2025 STITCH CRAFT AARTISTRY</span>, all
          rights reserved.
        </p>
        <p>
          DESIGN BY <span className="company">AmiHive</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
