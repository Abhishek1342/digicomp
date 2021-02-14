import React from "react";
import logoImg from "../Images/Logo/dclogo.png";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer">
        <div className="l-footer">
          <img src={logoImg} alt="logo" />
          <div className="l-footer-a">DIGICOMP</div>
          <div className="l-footer-b">Doctors on a single platform</div>
        </div>
        <ul className="r-footer">
          <li>
            <h2>Quick links</h2>
            <ul className="box">
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Specialists</a>
              </li>
              <li>
                <a href="#">Diseases</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Contact Us</h2>
            <ul className="box">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">E-mail</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul className="box">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">How to use</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="b-footer">
        <p>All rights reserved by ©DIGICOMP 2020 </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
