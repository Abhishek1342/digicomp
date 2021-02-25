import React from "react";
import "./how.scss";
import Footer from "../Footer/footer";
import Navbar from "../Top-bar/Navbar";

const HowToUse = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="how-to-use">
        <div className="how-to-use-heading">
          <div className="how-to-use-dash"></div>
          <h1 className="how-to-use-title">How to Use</h1>
          <div className="how-to-use-dash"></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default HowToUse;
