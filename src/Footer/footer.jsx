import React from "react";
import Logo from "../Images/Logo/dclogo.png";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-part-1">
        <div className="logo-footer">
          <img className="grand-1-foot-logo" src={Logo} alt="logo" />
          <h1 className="grand-1-foot-name">DIGICOMP</h1>
          <p className="grand-1-foot-tag">Doctors on a single platform</p>
        </div>
        <div className="quick-links-footer">
          <h2 className="grand-2-foot-head">Quick Links</h2>
          <ul className="grand-2-foot-list">
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Doctors</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Diseases</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Specialists</li>
            </Link>
          </ul>
        </div>
        <div className="contact-footer">
          <h2 className="grand-2-foot-head">Contact Us</h2>
          <ul className="grand-2-foot-list">
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>+00 0000000000</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>abc@digicomp.com</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Help</li>
            </Link>
          </ul>
          <div className="grand-3-foot-social">
            <a href="" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
        <div className="policies-footer">
          <h2 className="grand-2-foot-head">Legal</h2>
          <ul className="grand-2-foot-list">
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Privacy Policy</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>Terms and Conditions</li>
            </Link>
            <Link className="grand-2-foot-link">
              <i class="far fa-hand-point-right"></i>&nbsp;
              <li>How to Use</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-part-2">
        <Link className="grand-a-foot-link">
          <h2>Credits and Copyright</h2>
          &nbsp;&nbsp;
          <i class="far fa-copyright"></i>{" "}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Footer;
