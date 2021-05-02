import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light   ml-5">
      <a className="navbar-brand white-color name  text-white" href="#">
        Rakhu Dey
      </a>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav white-color ">
          <a
            className="nav-item nav-link active nav-button text-white"
            href="#home"
          >
            Home <span className="sr-only">(current)</span>
          </a>
          <a
            className="nav-item nav-link nav-button  text-white"
            href="#project"
          >
            Projects
          </a>
          <a className="nav-item nav-link nav-button  text-white" href="#about">
            About
          </a>
          <a className="nav-item nav-link nav-button  text-white" href="#blog">
            Blog
          </a>
          <a
            className="nav-item nav-link nav-button text-white"
            href="#contract"
          >
            Contract
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
