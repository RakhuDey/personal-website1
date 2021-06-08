import React from "react";
import profile from "../../../images/profile.jpg";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import resume from "../../../images/resume.pdf";

const Header = () => {
  return (
    <div className="header-main">
      <div id="home" className="row ">
        <div className="md-col-6 m-5">
          <img className="header-pic" src={profile} alt="" />
        </div>
        <div className="md-col-6 mt-5">
          <div className="headline white-color">
            <h1>Hello,</h1> <br />
            <h4> a bit about me:</h4>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <a className="nav-item nav-link" href="#resume">
              <p className="resume">MY RESUME</p>
            </a>
            <a className="nav-item nav-link" href={resume} download="resume">
              <p className="work">DOWNLOAD RESUME</p>
            </a>

            <a className="nav-item nav-link" href="#skill">
              <p className="skill">MY SKILLS</p>
            </a>
          </div>
          <div className="d-flex justify-content-center  mt-5">
            <p className="header-paragraph">
              I am a full-time Web Developer. <br />
              Using JavaScript, React (JS), Next.JS, <br />
              HTML, HTML5, CSS Bootstrap, ES6, Material UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
