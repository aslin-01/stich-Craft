import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Router>
            <Header />
            <ScrollToTop />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </Router>

          {/* ✅ ToastContainer placed outside Router for global accessibility */}
          <ToastContainer position="top-right" autoClose={3000} />
        </>
      )}
    </>
  );
}

export default App;
