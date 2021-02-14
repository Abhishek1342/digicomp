import React from "react";
import Logo from "../Images/Logo/logo64X64.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="brand-div">
        <div className="brnding">
          <a href="/#">
            <img src={Logo} alt="logo" />
            <h1> DIGICOMP</h1>
          </a>
        </div>
      </div>
      <div className="navitm">
        <a href="/#">Log In</a>
        <a href="/#">Sign Up</a>
      </div>
    </nav>
  );
}
export default Navbar;
