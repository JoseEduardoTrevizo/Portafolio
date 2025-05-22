import Logo from "../../Images/logo.png";
import React from "react";
import "../../blocks/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container_header">
        <img src={Logo} className="header_logo" />
        <div className="container__nav">
          <div className="nav_list">
            <NavLink to="/Portafolio/home" className="Home">
              Home
            </NavLink>
            <NavLink to="/Portafolio/about" className="About">
              About
            </NavLink>
            <NavLink to="/Portafolio/projects" className="Projects">
              Projects
            </NavLink>
            <NavLink to="/Portafolio/resume" className="Resume">
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
