import React from "react";
import emailjs from "emailjs-com";

const Contract = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d63grxf",
        "template_gji1vo3",
        e.target,
        "user_MWVE0ACP01E8rkiMEmwIJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div id="contract" className="white-color">
      <h1 className="title mt-5 mb-5 ">CONTRACT WITH ME</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="row m-5">
          <div className="col-md-6">
            <input type="hidden" name="contact_number" />
            <label className="mr-3">Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="col-md-6">
            <label className="mr-3">Email</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className="col-md-12 m-5">
          <label className="mr-3">Message</label>
          <textarea name="message" />
          <input className="button ml-3" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contract;
