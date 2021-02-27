import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo/logo64X64.png";
import Login from "./Account/login";
import SignUp from "./Account/signup";
import { modalStyle } from "./modalStyle";
import "./navbar.css";
import userImg from "../Home/Member/images/Pratik.jpg";

function Navbar() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const [rotate, setRotate] = useState("rotate(0deg)");
  const displayDropdown = () => {
    if (display === "none") {
      setDisplay("flex");
      setRotate("rotate(90deg)");
    } else {
      setDisplay("none");
      setRotate("rotate(0deg)");
    }
  };
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
      <div className="home-top-dropdown">
        <div className="home-top-user-profile-button" onClick={displayDropdown}>
          <img className="child-1-home-top-circle" src={userImg} alt="logo" />
          <i
            className="fas fa-caret-right child-1-home-top-arrow"
            style={{ transform: rotate }}
          ></i>
        </div>
        <div className="home-top-dropdown-box" style={{ display: display }}>
          <Link className="home-top-dropdown-item">Your Profile</Link>
          <Link className="home-top-dropdown-item">Doctors</Link>
          <Link className="home-top-dropdown-item">Specialists</Link>
          <Link className="home-top-dropdown-item">Diseases</Link>
          <Link className="home-top-dropdown-item">Sign Out </Link>
        </div>
      </div>
      {/* <div className="navitm">
        <a onClick={() => setModalLoginIsOpen(true)}>Log In</a>
        <Modal
          closeTimeoutMS={500}
          isOpen={modalLoginIsOpen}
          onRequestClose={() => setModalLoginIsOpen(false)}
          style={modalStyle}
        >
          <Login />
        </Modal>
        <a onClick={() => setModalSignupIsOpen(true)}>Sign Up</a>
        <Modal
          closeTimeoutMS={500}
          isOpen={modalSignupIsOpen}
          onRequestClose={() => setModalSignupIsOpen(false)}
          style={modalStyle}
        >
          <SignUp />
        </Modal>
      </div> */}
    </nav>
  );
}
export default Navbar;
