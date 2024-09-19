import React from "react";
import "../styles/Course.css";

const CoursesItem = ({ imageSrc, category, price, author, title }) => {
  return (
    <div className="events_item">
      <div className="thumb">
        <a href="#">
          <img src={imageSrc} alt={title} />
        </a>
        <span className="category">{category}</span>
        <span className="price">
          <h6>
            <em>$</em>
            {price}
          </h6>
        </span>
      </div>
      <div className="down-content">
        <span className="author">{author}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CoursesItem;
