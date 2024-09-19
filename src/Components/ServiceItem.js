import React from "react";
import "../styles/ServiceItem.css";

const ServiceItem = ({ img, title, desc }) => {
  return (
    <div className="service-item">
      <div className="icon">
        <img src={img} alt={title} />
      </div>
      <div className="main-content">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="main-button">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
