import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import styles
import HeroSection from "../Components/HeroSection";
import TestimonialImg from "../assets/images/testimonial-author.jpg";
import TestimonialCarousel from "../Components/TestimonialCarousel";
import Footer from "../Components/Footer";

const Testimonial = () => {
  const testimonials = [
    {
      text: "“Please tell your friends or colleagues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”",
      img: TestimonialImg,
      title: "Full Stack Master",
      name: "Claude David",
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”",
      img: TestimonialImg,
      title: "UI Expert",
      name: "Thomas Jefferson",
    },
    {
      text: "“Scholar is a free website template provided by TemplateMo for educational-related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”",
      img: TestimonialImg,
      title: "Digital Animator",
      name: "Stella Blair",
    },
  ];
  return (
    <div>
      <HeroSection title={"Testimonials"} desc={""} />
      <div className="testimonials container">
        <div className="row">
          <div className="col-lg-7">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="section-heading">
              <h6>TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>
                You can search free CSS templates on Google using different
                keywords such as templatemo portfolio, templatemo gallery,
                templatemo blue color, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonial;
