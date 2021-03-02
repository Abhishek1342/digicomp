import React, { useState } from "react";
import "./detail-card.css";
import Banner from "./images/banner.svg";

function DetailCard() {
  // var status = "Open";
  const [numberofpatients, setnumberofpatients] = useState(1);

  function increasenumberofpatients() {
    return setnumberofpatients + 1;
  }

  function decreasenumberofpatients() {
    return setnumberofpatients - 1;
  }

  return (
    <div className="detail-card-container">
      <div className="detail-card">
        <div className="banner">
          <p className="status-txt">Open</p>
          <img src={Banner} />
        </div>
        <div className="Card-hdding">
          <h3>Details</h3>
        </div>
        <div className="detail-contents">
          <div className="detail-card-content 1">
            <div className="parameter">
              <b>Address </b>
            </div>
            <div className="colon">
              <b>:</b>
            </div>
            <div className="value">
              Do excepteur eiusmod laboris consequat aliquip elit commodo. Nulla
              consectetur ipsum ut ad ex adipisicing proident id tempor
              consequat ad nisi labore. Ea mollit eu veniam cillum. Nulla duis
              minim sint in occaecat occaecat.
            </div>
          </div>
          <div className="detail-card-content 1">
            <div className="parameter">
              <b>Phone </b>
            </div>
            <div className="colon">
              <b>:</b>
            </div>
            <div className="value">+91-9615531590</div>
          </div>
          <div className="detail-card-content 1">
            <div className="parameter">
              <b>Fee </b>
            </div>
            <div className="colon">
              <b>:</b>
            </div>
            <div className="value">₹ 250</div>
          </div>
          <div className="detail-card-content 1">
            <div className="parameter">
              <b>Timing </b>
            </div>
            <div className="colon">
              <b>:</b>
            </div>
            <div className="value">4 : 00 pm</div>
          </div>
        </div>
        <div className="buttons-container">
          <div className="counter-wrapper">
            <b>No. of patients</b>
            <div className="counter-container">
              <button
                className="counter-button"
                onclick={decreasenumberofpatients()}
              >
                -
              </button>
              <input
                className="value-by-user"
                type="text"
                value={numberofpatients}
              />
              <button
                className="counter-button"
                onclick={increasenumberofpatients()}
              >
                +
              </button>
            </div>
          </div>
          <button className="book-button" type="submit">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
