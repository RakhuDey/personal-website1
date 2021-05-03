import React from "react";
import "./AboutMe.css";
import resume from "../../../images/resume.pdf";

const AboutMe = () => {
  return (
    <div id="about">
      <h1 className="title">ABOUT ME</h1>
      <div className="row ml-3 mt-3">
        <div className="col-md-6 personal-info ml-3">
          <h1 className="title-about">Web Developer</h1>
          <p>
            I love applying responsive websites principles and watching my web
            pages shrink into mobile screens and still looking amazing. It's
            oddly satisfying. I think in a way I am kind of like those web
            pages. I am moldable, but I still keep my creative flare intact.
            <br />
            Self assessment
            <br />
            ● Willing to learn and build up career by accepting <br />
            responsibilities in all aspects <br />
            ● Energetic, sincere, Hardworking and dutiful <br />
            ● Optimistic, Confident and friendly as a person <br />● Able to set
            priorities and schedule task
          </p>
        </div>
        <div className="col-md-5 personal-info ">
          <h1 className="title-about">Personal Information</h1>
          <h4>Name: Rakhu Dey</h4>
          <h4>Age: 27</h4>
          <h4>Residence: Bangladesh</h4>
          <h4>Address: Moulvibazar, Sylhet</h4>
          <h4>Email: rakhu_dey@yahoo.com</h4>
          <h4>Phone: +8801723692869</h4>
          <h4>Freelance: Available</h4>
          <button className="btn button btn-primary">
            {" "}
            <a href={resume}>Download Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
