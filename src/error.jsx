import React from "react";
import "./error.css";
import Logo from "./Images/Logo/dclogo.png";
import Robo from "./Images/error/robot404.gif";

function Error() {
  return (
    <div className="error-container">
      <div className="Brandus">
        <img src={Logo} alt="Digicomp Logo" />
        <h1>DIGICOMP</h1>
      </div>
      <div className="Content-container">
        <div className="Contnt">
          <h2>404</h2>
          <h3>Error !</h3>
          <div className="RTH-btn">
            <a href="/404">Return to home</a>
          </div>
        </div>
        <div className="gif-container">
          <img src={Robo} />
        </div>
      </div>
    </div>
  );
}

export default Error;
