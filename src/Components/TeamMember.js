import React from "react";
import "../styles/TeamMember.css";

const TeamMember = ({ img, category, name, socialLinks }) => {
  return (
    <div className="team-member">
      <div className="main-content">
        <img src={img} alt={name} />
        <span className="category">{category}</span>
        <h4>{name}</h4>
        <ul className="social-icons">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>
                <i className={link.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
