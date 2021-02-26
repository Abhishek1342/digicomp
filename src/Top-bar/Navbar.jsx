import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo/logo64X64.png";
import Login from "./Account/login";
import SignUp from "./Account/signup";
import { modalStyle } from "./modalStyle";
import "./navbar.css";

function Navbar() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
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
      </div>
    </nav>
  );
}
export default Navbar;
