import React from "react";
import "../styles/Event.css";
// EventItem Component
const EventItem = ({ imageSrc, category, title, date, duration, price }) => {
  return (
    <div className="col-lg-12 col-md-6">
      <div className="item">
        <div className="row">
          <div className="col-lg-3">
            <div className="image">
              <img src={imageSrc} alt={title} />
            </div>
          </div>
          <div className="col-lg-9">
            <ul>
              <li>
                <span className="category">{category}</span>
                <h4>{title}</h4>
              </li>
              <li>
                <span>Date:</span>
                <h6>{date}</h6>
              </li>
              <li>
                <span>Duration:</span>
                <h6>{duration}</h6>
              </li>
              <li>
                <span>Price:</span>
                <h6>{price}</h6>
              </li>
            </ul>
            <a href="#">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
