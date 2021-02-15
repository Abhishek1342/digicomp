import React, { useState } from "react";
import Modal from "react-modal";

import "./home-landing.css";
import "../../index.scss";
import Logo from "../../Images/Logo/dclogo.png";
import SearchBar from "../../Top-bar/searchbar";
import Homebg from "../../Images/Home/Vector 2landing.svg";
import LandingSvg from "../../Images/Home/landing-svg.svg";

import Login from "../../Top-bar/Account/login";
import SignUp from "../../Top-bar/Account/signup";

import { modalStyle } from "../../Top-bar/modalStyle";

function Homelanding() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
  return (
    <div className="landing-bg-space">
      <img
        className="home-bg"
        src={Homebg}
        alt="Landing
        background
        of
        digicomp"
      />
      <div className="Landing-nav">
        <img className="home-logo" src={Logo} alt="DigiComp logo" />
        <div className="nav-lnks">
          <a className="login-signup" onClick={() => setModalLoginIsOpen(true)}>
            Log In
          </a>

          <Modal
            isOpen={modalLoginIsOpen}
            onRequestClose={() => setModalLoginIsOpen(false)}
            style={modalStyle}
          >
            <Login style={{ position: "relative" }} />
          </Modal>

          <a
            className="login-signup"
            onClick={() => setModalSignupIsOpen(true)}
          >
            Sign Up
          </a>
          <Modal
            isOpen={modalSignupIsOpen}
            onRequestClose={() => setModalSignupIsOpen(false)}
            style={modalStyle}
          >
            <SignUp></SignUp>
          </Modal>
        </div>
      </div>

      <div className="Landing-cntnt">
        <div className="Landing-txt">
          <h1 className="Brnd">DIGICOMP</h1>
          <h3 className="page-info">Doctors on a Single Platform</h3>
          <SearchBar type="Search for Doctors or Diseases" />
        </div>
        <div className="Landing-svg">
          <img src={LandingSvg} />
        </div>
      </div>
    </div>
  );
}

export default Homelanding;
