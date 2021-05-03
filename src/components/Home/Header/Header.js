import React from "react";
import profile from "../../../images/profile.jpg";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import resume from "../../../images/resume.pdf";

const Header = () => {
  return (
    <div className="header-main">
      <Navbar></Navbar>
      <div id="home" className="row mt-5">
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
          <div className="d-flex justify-content-center mt-5">
            <p>
              Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.{" "}
              <br />
              Consequuntur harum quisquam <br /> tempore delectus voluptate.
              Libero?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
