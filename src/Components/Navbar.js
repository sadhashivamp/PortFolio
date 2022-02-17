import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon(!icon);
  };

  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo" onClick={closeSideDrawer}>
            <a href="#1">
              PortFo<span>lio.</span>
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {icon ? (
              <FaTimes className="fa-times"></FaTimes>
            ) : (
              <FaBars className="fa-bars"></FaBars>
            )}
          </div>
          <ul className={icon ? "menu active" : "menu"}>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#home">Home</a>
            </li>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#about">About</a>
            </li>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#services">Services</a>
            </li>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-links" onClick={closeSideDrawer}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
