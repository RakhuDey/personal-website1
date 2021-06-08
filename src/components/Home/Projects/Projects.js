import React from "react";
import "./Projects.css";
import project1 from "../../../images/project-1.JPG";
import project2 from "../../../images/project-2.JPG";

const Projects = () => {
  return (
    <div id="project" className="row ">
      <div class="card col-md-5 p-3 m-5 ">
        <img src={project1} className="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Project-1</h5>
          <button className="button">
            <a href="https://bike-service1.web.app/" className="btn">
              Click to Demo
            </a>
          </button>
        </div>
      </div>
      <div class="card col-md-5 p-3 m-5">
        <img src={project2} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Project-2</h5>
          <button className="button">
            <a
              href="https://football-club-info-rakhu-dey.netlify.app/"
              className="btn"
            >
              Click to Demo
            </a>
          </button>
        </div>
      </div>
      <div class="card col-md-5 p-3 m-5">
        <img src={project1} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Project-1</h5>
          <button className="button">
            <a href="https://bike-service1.web.app/" className="btn">
              Click to Demo
            </a>
          </button>
        </div>
      </div>
      <div class="card col-md-5 p-3 m-5">
        <img src={project2} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Project-2</h5>
          <button className="button">
            <a
              href="https://football-club-info-rakhu-dey.netlify.app/"
              className="btn"
            >
              Click to Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
