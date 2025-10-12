import React, { useEffect } from "react";
import "../style/Home.css"; // Your CSS file
import Banner from "../pages/Home/Banner";
import About from "../pages/Home/About";
import Services from "../pages/Home/ServiceHome";
import Testimonial from "../pages/Home/Testimonials";
import Creation from "./Home/Creation";
import Gallery from "./Home/Gallery";

const Home = () => {
  useEffect(() => {
    // Comment or uncomment this block to enable/disable the background ball effect
    /*
    const canvas = document.getElementById("ballsCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balls = [];
    const colors = ["#ededc5ff", "#595b5cff", "#b1b0abff"];

    class Ball {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 8 + 2;
        this.dx = Math.random() * 1 - 0.5;
        this.dy = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    for (let i = 0; i < 50; i++) {
      balls.push(new Ball());
    }

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach((ball) => ball.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
    */
  }, []);

  return (
    <div className="home-container">
      {/* Uncomment this <canvas> to enable background ball effect */}
      {/* <canvas id="ballsCanvas" className="balls-canvas"></canvas> */}

      <div className="home-content">
        <Banner />
        <About />
        <Creation />
        <Services />
        <Gallery />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
