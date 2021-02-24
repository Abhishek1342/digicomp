import React from "react";
import "./detail-card.css";
import Banner from "./images/banner.svg";

function DetailCard() {
  var status = "Open";
  return (
    <div className="detail-card-container">
      <div className="detail-card">
        <div className="banner">
          <p className="status-txt">{status}</p>
          <img src={Banner} />
        </div>
        <div className="Card-hdding">
          <h3>Details</h3>
        </div>
        <div className="detail-parameters">
          <p>Address</p>
          <p>Phone</p>
          <p>Fee</p>
          <p>Time</p>
        </div>
        <div className="detail-values">
          <p>Address</p>
          <p>Phone</p>
          <p>Fee</p>
          <p>Time</p>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
