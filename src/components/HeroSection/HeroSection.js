import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/static/media/automotive.224e7418884105595114.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className="content">
        <span className="subheading">Driven by performance</span>
        <h2 className="heading">
          <span className="bold">Soft trims and <span className="highlight">NVH solutions</span></span><br />
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
