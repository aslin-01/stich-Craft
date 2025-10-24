import React, { useRef, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/Contact.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_o59wlae",
        "template_tkjrvbo",
        form.current,
        "Nh4aJduZkbE_arghu"
      );
      if (result.text === "OK") {
        toast.success(
          "✅ Message sent successfully! We'll get back to you soon."
        );
        e.target.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "⚠️ Failed to send message. Please check your network or try later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact glass-section">
      {/* Header */}
      <motion.div
        className="contact-header"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="contact-quote">Your Ideas, Our Craft.</p>
        <h1 className="contact-title">
          Get in <span className="color">Touch</span>
        </h1>
        <p className="contact-subtitle">
          Let’s create something beautiful together
        </p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        className="contact-grid"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Contact Info */}
        <motion.div className="contact-card glass-card" variants={fadeInUp}>
          <h3 className="card-title">Reach Us</h3>

          <motion.div
            className="contact-icons"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{
              duration: 0.1,
              ease: [0.23, 1, 0.32, 1],
              staggerChildren: 0.02,
            }}
          >
            {[
              {
                icon: <FaPhone />,
                text: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: <FaEnvelope />,
                text: "Stitchcraftartistrystudio@gmail.com",
                href: "mailto:Stitchcraftartistrystudio@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                text: "3/65, Kuruvilaikadu, Eraviputhoorkadai, Kattathurai",
                href: "https://www.google.com/maps/place/Manu+Prem+M/@8.2924484,77.2541692,17z",
              },
              {
                icon: <FaClock />,
                text: "Mon - Sat: 10AM - 7PM",
              },
              {
                icon: <FaWhatsapp />,
                text: "Chat on WhatsApp",
                href: "https://wa.me/919876543210",
              },
              {
                icon: <FaInstagram />,
                text: "@stitchcraft_artistry",
                href: "https://instagram.com/stitchcraft_artistry",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="contact-icon-box"
                variants={fadeInUp}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <>
                    {item.icon}
                    <span>{item.text}</span>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="contact-card glass-card" variants={fadeInUp}>
          <h3 className="card-title">Message Us</h3>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="glass-form"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1,
            }}
          >
            <div className="input-box">
              <input type="text" name="user_name" required />
              <label>Full Name</label>
            </div>

            <div className="input-box">
              <input type="email" name="user_email" required />
              <label>Email Address</label>
            </div>

            <div className="input-box">
              <textarea name="message" rows="5" required></textarea>
              <label>Message</label>
            </div>

            <motion.button
              type="submit"
              className="glass-btn"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              {!loading && <span className="arrow">→</span>}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* Map */}
      <motion.div
        className="contact-map"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{
          position: "relative",
          width: "100%",
          height: "350px",
          borderRadius: "12px",
        }}
      >
        <a
          href="https://www.google.com/maps/place/Manu+Prem+M/@8.2924484,77.2541692,17z"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50px",
            zIndex: 10,
            cursor: "pointer",
          }}
        >
          <span style={{ color: "white", padding: "10px", fontWeight: "bold" }}>
            Open in Google Maps
          </span>
        </a>

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5344114293055!2d77.2541692!3d8.2924484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045590efcb6213%3A0x2db2fd4d83790292!2sManu%20Prem%20M!5e0!3m2!1sen!2sin!4v1707367812345!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
};

export default ContactPage;
