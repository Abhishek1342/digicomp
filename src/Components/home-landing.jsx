import React from "react";
import "./home-landing.css";
import Logo from "../Components/Images/Logo/dclogo.png";
import SearchBar from "./searchbar";
import Homebg from "../Components/Images/Home/Vector 2landing.svg";
import LandingSvg from "../Components/Images/Home/landing-svg.svg";

function Homelanding() {
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
          <a href="/#">Log In</a>
          <a href="/#">Sign Up</a>
        </div>
      </div>

      <div className="Landing-cntnt">
        <div className="Landing-txt">
          <h1 className="Brnd">DIGICOMP</h1>
          <h3 className="page-info">Doctors on a Single Platform</h3>
          <SearchBar />
        </div>
        <div className="Landing-svg">
          <img src={LandingSvg} />
        </div>
      </div>
    </div>
  );
}

export default Homelanding;
