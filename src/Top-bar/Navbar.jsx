import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo/logo64X64.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="brand-div">
        <div className="brnding">
          <Link to="/">
            <img src={Logo} alt="logo" />
            <h1> DIGICOMP</h1>
          </Link>
        </div>
      </div>
      <div className="navitm">
        <a>Log In</a>
        <a>Sign Up</a>
      </div>
    </nav>
  );
}
export default Navbar;
