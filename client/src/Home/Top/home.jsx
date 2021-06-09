import React, { useState } from "react";
import Modal from "react-modal";

import "./home-landing.css";
import Logo from "../../Images/Logo/dclogo.png";
import Title from "./DIGICOMP.svg";
import SearchBar from "../../Top-bar/searchbar";

import Login from "../../Top-bar/Account/login";
import SignUp from "../../Top-bar/Account/signup";

import { modalStyle } from "../../Top-bar/modalStyle";

const HomeTop = () => {
  return (
    <div>
      <div className="home-top-nav">
        <img className="home-top-nav-img" src={Logo} alt="logo" />
        <ul className="home-top-nav-links">
          <li className="home-top-loginSignup">Log In</li>
          <li className="home-top-loginSignup">Sign Up</li>
        </ul>
      </div>
      <div className="home-top-base">
        <div className="home-top-details">
          <img src={Title} alt="Heading" />
          <div className="home-top-tagline">DOCTORS ON A SINGLE PLATFORM</div>
          <input type="text" />
        </div>
        <img src={upDown} alt="image" />
      </div>
    </div>
  );
};

export default HomeTop;
