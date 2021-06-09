import React from "react";
import { FaStar } from "react-icons/fa";

const DoctorCard = ({
  status,
  img,
  name,
  degree,
  address,
  phone,
  fees,
  rate,
  number,
}) => {
  // const ratingValue = parseInt({ rate });
  return (
    <div className="doctor-card-main">
      <div id="child1" className="child-with-img" style={{ border: "none" }}>
        <div className="grand-1-status">
          <div className="gg-1a-bar"></div>
          <div className="gg-1a-circle">{status}</div>
        </div>
        <div className="grand-1-img">
          <img src={img} alt="Dr. Jhonny Sins" />
        </div>
        <div className="grand-1-name">
          <a>{name}</a>
        </div>
      </div>

      <div id="child-2" className="child-with-space"></div>
      <div id="child-3" className="child-with-button">
        <div className="grand-3-button">
          <a href="">
            <div className="gg-3a-circle"></div>&nbsp;Know More&nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div id="child-4" className="child-with-content">
        <p className="grand-3-degree">{degree}</p>
        <p className="grand-3-address">{address}</p>
        <p className="grand-3-phone">Phone : {phone}</p>
        <p className="grand-3-fee">
          Fees :{" "}
          <i
            class="fa fa-inr"
            aria-hidden="true"
            style={{ fontSize: "18px" }}
          ></i>
          &nbsp;{fees}
        </p>
        <div className="grand-3-rating">
          <div className="star-rating">
            {[...Array(rate)].map(() => {
              return <FaStar className="star" color={"#FFD911"} size={25} />;
            })}
            {[...Array(5 - rate)].map((star) => {
              return <FaStar className="star" color={"#c4c4c4"} size={25} />;
            })}
          </div>
          <div className="number-of-rating">{number}+</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
