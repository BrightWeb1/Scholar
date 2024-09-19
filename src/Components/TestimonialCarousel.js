// TestimonialCarousel.js
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../styles/TestimonialCarousel.css";

const TestimonialCarousel = ({ testimonials }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1, // Only one item per slide
    autoplay: true,
    autoplayTimeout: 5000,
  };

  return (
    <OwlCarousel className="owl-carousel owl-testimonials" {...options}>
      {testimonials.map((testimonial, index) => (
        <div className="item" key={index}>
          <p>{testimonial.text}</p>
          <div className="author">
            <img src={testimonial.img} alt={testimonial.name} />
            <span className="category">{testimonial.title}</span>
            <h4>{testimonial.name}</h4>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
