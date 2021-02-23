import React, { useState } from "react";
import Modal from "react-modal";

import "./index.scss";

import "./home-landing.css";
import Logo from "../../Images/Logo/dclogo.png";
import Title from "./DIGICOMP.svg";
import Landing from "./home-landing.svg";
import SearchBar from "../../Top-bar/searchbar";

import Login from "../../Top-bar/Account/login";
import SignUp from "../../Top-bar/Account/signup";

import { modalStyle } from "../../Top-bar/modalStyle";

const HomeTop = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
  return (
    <div className="home-top">
      <div className="home-top-nav">
        <img className="home-top-nav-img" src={Logo} alt="logo" />
        <ul className="home-top-nav-links">
          <li
            className="home-top-loginSignup"
            onClick={() => setModalLoginIsOpen(true)}
          >
            Log In
          </li>
          <Modal
            closeTimeoutMS={500}
            isOpen={modalLoginIsOpen}
            onRequestClose={() => setModalLoginIsOpen(false)}
            style={modalStyle}
          >
            <Login style={{ position: "relative" }} />
          </Modal>
          <li
            className="home-top-loginSignup"
            onClick={() => setModalSignupIsOpen(true)}
          >
            Sign Up
          </li>
          <Modal
            closeTimeoutMS={500}
            isOpen={modalSignupIsOpen}
            onRequestClose={() => setModalSignupIsOpen(false)}
            style={modalStyle}
          >
            <SignUp></SignUp>
          </Modal>
        </ul>
      </div>
      <div className="home-top-base">
        <div className="home-top-details">
          <img className="home-top-brand" src={Title} alt="Heading" />
          <div className="home-top-tagline">DOCTORS ON A SINGLE PLATFORM</div>
          <SearchBar type="Search for Doctors or Diseases " />
        </div>
        <img className="home-top-upDown" src={Landing} alt="image" />
      </div>
    </div>
  );
};

export default HomeTop;
