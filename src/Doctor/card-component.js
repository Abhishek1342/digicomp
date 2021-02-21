import React from "react";

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
  return (
    <div className="doctor-card-main">
      <div id="child-doctor1" className="child-doctor-with-img">
        <div className="grand-doctor-1-status">
          <div className="gg-doctor-1a-bar"></div>
          <div className="gg-doctor-1a-circle">{status}</div>
        </div>
        <div className="grand-doctor-1-img">
          <img src={img} alt="Dr. Jhonny Sins" />
        </div>
        <div className="grand-doctor-1-name">
          <a>{name}</a>
        </div>
      </div>

      <div id="child-doctor-2" className="child-doctor-with-space"></div>
      <div id="child-doctor-3" className="child-doctor-with-button">
        <div className="grand-doctor-3-button">
          <a>
            <div className="gg-doctor-3a-circle"></div>&nbsp;Know More&nbsp;
            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div id="child-doctor-4" className="child-doctor-with-content">
        <p className="grand-doctor-3-degree">{degree}</p>
        <p className="grand-doctor-3-address">{address}</p>
        <p className="grand-doctor-3-phone">Phone : {phone}</p>
        <p className="grand-doctor-3-fee">
          Fees :{" "}
          <i
            class="fas fa-rupee-sign"
            aria-hidden="true"
            style={{ fontSize: "17px" }}
          ></i>
          &nbsp;{fees}
        </p>
        <div className="grand-doctor-3-rating">
          <div className="star-rating">
            {[...Array(rate)].map(() => {
              return (
                <i
                  className="fas fa-star star-doctor-card"
                  style={{
                    color: "#FCC14A",
                  }}
                ></i>
              );
            })}
            {[...Array(5 - rate)].map((star) => {
              return (
                <i
                  className="fas fa-star star-doctor-card"
                  style={{
                    color: "#C4C4C4",
                  }}
                ></i>
              );
            })}
          </div>
          <div className="number-of-rating">{number}+</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
