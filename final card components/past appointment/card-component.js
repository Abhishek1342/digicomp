import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const PastCard = ({ drname, position, numPatient, namePatient, fees }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="past-app-card">
      <div id="child1" className="child-with-bars">
        <div className="grand-1-bars" id="bar-1"></div>
        <div className="grand-1-bars" id="bar-2"></div>
      </div>

      <div className="grand-with-details" id="child-2">
        <p className="grand-2-drname">{drname}</p>
        <div className="grand-2-id">
          <p className="gg-2-a-bold">Id:</p>&nbsp;
          <p className="gg-2-b-normal">{position}</p>
        </div>
        <div className="grand-2-date">
          <p className="gg-2-a-bold">Appointment Date:</p>&nbsp;
          <input type="date" />
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
        <div className="grand-2-rating">
          <p className="gg-2-a-bold">Rate:</p>&nbsp;
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#FFD911" : "#C4C4C4"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>

        <div className="grand-2-feedback">
          <p className="gg-2-a-bold">Feedback:</p>&nbsp;&nbsp;&nbsp;
          <textarea></textarea>
        </div>
      </div>

      <div id="child4" className="child-with-bars">
        <div className="grand-1-bars" id="bar-3"></div>
        <div className="grand-1-bars" id="bar-4"></div>
      </div>
    </div>
  );
};
export default PastCard;
