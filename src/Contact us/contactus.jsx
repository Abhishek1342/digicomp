import React {useState} from "react";
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
          <div className="Contact-us-info">
            Veniam do aliqua pariatur eu. Eu id ut eu non voluptate sit sunt qui
            do est. Consequat incididunt laboris labore eu enim anim sint ea in
            fugiat esse nostrud. Quis ea eu et aliqua ipsum magna veniam nulla.
            Consequat eiusmod irure veniam consequat velit minim amet
            exercitation esse. Consectetur quis aute irure eu velit mollit
            proident quis exercitation sint aliquip cupidatat laborum ut. Irure
            adipisicing enim dolor eiusmod ullamco excepteur tempor voluptate
            quis labore. Irure sit proident nostrud proident ex cillum elit
          </div>
          <div className="Contact-us-address">
            <i class="fas fa-map-marked-alt"></i>
            <b>Address : </b>
            <a href="/#">Location here</a>
          </div>
          <div className="Contact-us-phone">
            <i class="fas fa-phone-alt"></i>
            <b>Phone : </b>
            <a href="tel:+000000000000">+00 0000000000</a>
          </div>
          <div className="Contact-us-email">
            <i class="fas fa-envelope"></i>
            <b>Email : </b>
            <a href="mailto:example@gmail.com">Email here</a>
          </div>
          <div className="Contact-us-social-links">
            <a href="/#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="/#">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
