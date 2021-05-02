import React from "react";

const ProgressBar = () => {
  return (
    <div id="skill" className="row p-5 mb-5">
      <div className="col-md-6 p-5">
        <h3 style={{ borderBottom: "1px dotted gold" }} className="white-color">
          DESIGN SKILLS
        </h3>
        <h5 style={{ textTransform: "uppercase" }} className="white-color mt-5">
          Photoshop
        </h5>
        <div class="progress row">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
        <div className="mt-5">
          <h5 style={{ textTransform: "uppercase" }} className="white-color">
            Illustrator
          </h5>
          <div class="progress row">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5 style={{ textTransform: "uppercase" }} className="white-color">
            Coral Draw
          </h5>
          <div class="progress row">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-5">
        <h3 style={{ borderBottom: "1px dotted gold" }} className="white-color">
          CODING SKILLS
        </h3>
        <h5 style={{ textTransform: "uppercase" }} className="white-color mt-5">
          HTML5 & CSS
        </h5>
        <div class="progress row">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="91"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "91%" }}
          >
            91%
          </div>
        </div>
        <div className="mt-5">
          <h5 style={{ textTransform: "uppercase" }} className="white-color">
            Javascript
          </h5>
          <div class="progress row">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
        </div>{" "}
        <div className="mt-5">
          <h5 style={{ textTransform: "uppercase" }} className="white-color">
            React
          </h5>
          <div class="progress row">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
