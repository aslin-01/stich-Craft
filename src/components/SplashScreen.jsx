import React, { useEffect } from "react";
import logo from '../assets/logo.png';  
import '../style/SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide splash after 3s
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="Aari Designs" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
