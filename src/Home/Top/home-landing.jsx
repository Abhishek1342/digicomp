import React, { useState } from "react";
import Modal from "react-modal";
import userImg from "../Member/images/Pratik.jpg";
import { Link } from "react-router-dom";
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
  const [display, setDisplay] = useState("hidden");
  const [rotate, setRotate] = useState("rotate(0deg)");
  const [opacity, setOpacity] = useState("rotate(0)");
  const displayDropdown = () => {
    if (display === "hidden") {
      setDisplay("visible");
      setOpacity(1);
      setRotate("rotate(90deg)");
    } else {
      setDisplay("hidden");
      setOpacity(0);
      setRotate("rotate(0deg)");
    }
  };
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
        {/* <div className="home-top-dropdown">
          <div
            className="home-top-user-profile-button"
            onClick={displayDropdown}
          >
            <img className="child-1-home-top-circle" src={userImg} alt="logo" />
            <i
              className="fas fa-caret-right child-1-home-top-arrow"
              style={{ transform: rotate }}
            ></i>
          </div>
          <div
            className="home-top-dropdown-box"
            style={{ visibility: display, opacity: opacity }}
          >
            <Link className="home-top-dropdown-item">Your Profile</Link>
            <Link className="home-top-dropdown-item">Sign Out </Link>
          </div>
        </div> */}
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
