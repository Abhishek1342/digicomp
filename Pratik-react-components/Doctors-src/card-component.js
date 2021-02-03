import React from "react";

const DoctorCard = ({
  status,
  img,
  name,
  degree,
  address,
  phone,
  fees,
  color1,
  color2,
  color3,
  color4,
  color5,
  number,
}) => {
  return (
    <div className="doctor-card-main">
      <div id="child1" className="child-with-img">
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
        <p className="grand-3-fee">Fees : &#x20B9; {fees}</p>
        <div className="grand-3-rating">
          <div className="star-rating">
            <ul>
              <li style={{ color: color1 }}>&#x2605;</li>
              <li style={{ color: color2 }}>&#x2605;</li>
              <li style={{ color: color3 }}>&#x2605;</li>
              <li style={{ color: color4 }}>&#x2605;</li>
              <li style={{ color: color5 }}>&#x2605;</li>
            </ul>
          </div>
          <div className="number-of-rating">{number}+</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
