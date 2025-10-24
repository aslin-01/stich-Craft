import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        // ✅ Show splash screen first
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          {/* ✅ Scroll to top on route change */}
          <ScrollToTop />

          {/* ✅ Navbar/Header */}
          <Header />

          {/* ✅ Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<PhotoGallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* ✅ 404 Catch-all route */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>

          {/* ✅ Footer */}
          <Footer />

          {/* ✅ Toast notifications */}
          <ToastContainer position="top-right" autoClose={3000} />
        </Router>
      )}
    </>
  );
}

export default App;
