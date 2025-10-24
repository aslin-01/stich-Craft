import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "../../style/Home/ContactModal.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const overlayFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const ContactModal = ({ isOpen, onClose }) => {
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
        toast.success("✅ Message sent successfully!");
        e.target.reset();
        onClose(); // auto-close after sending
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("⚠️ Failed to send message. Try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayFade}
          onClick={onClose} // close on overlay click
        >
          <motion.div
            className="modal-content glass-card"
            style={{ width: "50%", maxWidth: "500px" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            {/* Modal Form */}
            <h3 className="card-title">Message Us</h3>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="glass-form"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
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
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
