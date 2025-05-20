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
            <NavLink to="/home" className="Home">
              Home
            </NavLink>
            <NavLink to="/about" className="About">
              About
            </NavLink>
            <NavLink to="/projects" className="Projects">
              Projects
            </NavLink>
            <NavLink to="/resume" className="Resume">
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
