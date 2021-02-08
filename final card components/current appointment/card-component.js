import React from "react";

const CurrentCard = ({ drname, idno, rank, numPatient, namePatient, fees }) => {
  return (
    <div className="curr-app-card">
      <div id="child1" className="child-with-bars">
        <div className="grand-1-bars" id="bar-1"></div>
        <div className="grand-1-bars" id="bar-2"></div>
      </div>

      <div className="grand-with-details" id="child-2">
        <div className="grand-2-counter">
          <p>
            Your Appointment is on&nbsp;
            <input type="date" />
            at&nbsp;<span>4:00 PM</span>
          </p>
        </div>

        <p className="grand-2-drname">{drname}</p>
        <div className="grand-2-id">
          <p className="gg-2-a-bold">Id:</p>&nbsp;
          <p className="gg-2-b-normal">{idno}</p>
        </div>
        <div className="grand-2-rank">
          <p className="gg-2-a-bold">Your number:</p>&nbsp;
          <p className="gg-2-b-normal">{rank}</p>
        </div>
        <div className="grand-2-number">
          <p className="gg-2-a-bold">Number of patients:</p>&nbsp;
          <p className="gg-2-b-normal">{numPatient}</p>
        </div>
        <div className="grand-2-patname">
          <p className="gg-2-a-bold">Name of patients:</p>&nbsp;
          <p className="gg-2-b-normal">{namePatient}</p>
        </div>
        <div className="grand-2-fees">
          <p className="gg-2-a-bold">Fees:</p>&nbsp;
          <p className="gg-2-b-normal">
            <i class="fa fa-inr" aria-hidden="true"></i>
            &nbsp;{fees}
          </p>
        </div>
      </div>

      <div id="child4" className="child-with-bars">
        <div className="grand-1-bars" id="bar-3"></div>
        <div className="grand-1-bars" id="bar-4"></div>
      </div>
    </div>
  );
};
export default CurrentCard;
