import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Scholar
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/services"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/courses"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/team"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Team
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/testemonial"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/event"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Event
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link nav__cta">
                Register Now!
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
