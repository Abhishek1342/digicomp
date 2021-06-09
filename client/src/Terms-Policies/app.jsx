import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Top-bar/Navbar";

import "./term-policy.scss";

const TermsPolicy = ({ title, date, description }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="terms-policies">
        <h1 className="terms-policies-head">{title}</h1>
        <h5 className="terms-policies-date">Updated on {date}</h5>
        <p className="terms-policies-description">{description}</p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TermsPolicy;
