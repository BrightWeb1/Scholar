import React from "react";
import "../styles/HeroSection.css"; // Add your styles here

const HeroSection = ({ title, desc }) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
};
HeroSection.prototype = {
  title: String,
  desc: String,
};
export default HeroSection;
