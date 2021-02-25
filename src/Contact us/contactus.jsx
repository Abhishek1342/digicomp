import React from "react";
import "./contactus.css";
import { Textbox, Submit, Textarea } from "../Top-bar/Account/input";

function Contactus() {
  return (
    <div className="contact-us-container">
      <div className="Contact-us-card">
        <div className="left-contact-us">
          <h2>Contact us</h2>
          <form className="contact-us-form">
            <lable>Name</lable>
            <br />
            <Textbox
              id="name-contact-us"
              placeholder="Enter you name here"
              type="text"
            />
            <br />
            <lable>Email</lable>
            <br />
            <Textbox
              id="email-contact-us"
              placeholder="Enter you email here"
              type="email"
            />
            <br />
            <lable>Message</lable>
            <br />
            <Textarea
              id="name-contact-us"
              placeholder="Enter you Message here"
            />
            <br />
            <center>
              <Submit id="submit-contact-us" value="Send" />
            </center>

            <br />
          </form>
        </div>
        <div className="right-contact-us">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
