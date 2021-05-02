import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="title mt-5 mb-5 ">MY RESUME</h1>
      <div className="row">
        <div className="col-md-6 white-color p-5 ">
          <h1 style={{ borderBottom: "1px dotted gold" }}>EXPERIENCE</h1>
          <div className="cart-style">
            <h5>LEAD UI DESIGNER</h5>
            <p>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </p>
          </div>
        </div>
        <div className="col-md-6 white-color p-5">
          <h1 style={{ borderBottom: "1px dotted gold" }}>EDUCATION</h1>
          <p className="cart-style">
            LLB(Hon's) & and Master <br /> at Sylhet international university
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 white-color p-5 ">
          <h1 style={{ borderBottom: "1px dotted gold" }}>WEB DESIGNER</h1>
          <div className="cart-style">
            <p>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </p>
          </div>
        </div>
        <div className="col-md-6 white-color p-5">
          <h1 style={{ borderBottom: "1px dotted gold" }}>WEB DEVELOPER</h1>
          <p className="cart-style">
            Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in
            dignissimos debitis expedita asperiores delectus vitae corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
