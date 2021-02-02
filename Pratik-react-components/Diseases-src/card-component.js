import React from "react";

const DiseaseCard = ({ img, title, description }) => {
  return (
    <div className="dise-card-main">
      <div className="child-1">
        <div className="child-with-img">
          <div className="grand-1-img">
            <img src={img} alt="Tuberculosis" />
          </div>
          <div className="grand-1-back"></div>
        </div>
        <div className="grand-1-bar" id="right-bar"></div>
        <div className="grand-1-bar" id="left-bar"></div>
      </div>

      <div className="child-2 child-with-cont">
        <div className="grand-2-head">{title}</div>
        <div className="grand-2-cont">{description}</div>
      </div>

      <div className="child-3 child-with-btn">
        <div className="grand-3-btn">
          <a href="" target="_blank">
            Related Doctors{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="grand-3-divider"></div>
        <div className="grand-3-btn">
          <a href="" target="_blank">
            Know More{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
