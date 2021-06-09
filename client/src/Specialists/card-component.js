import React from "react";

const SpecialistCard = ({ img, title, description }) => {
  return (
    <div className="spec-card-main">
      <div className="card-specialist-back"></div>
      <div className="child-specialist-1">
        <div className="child-specialist-with-img">
          <div className="grand-specialist-1-img">
            <img src={img} alt="Tuberculosis" />
          </div>
          <div className="grand-specialist-1-back"></div>
        </div>

        <div className="grand-specialist-1-bar"></div>
      </div>

      <div className="child-specialist-2 child-specialist-with-cont">
        <div className="grand-specialist-2-head">{title}</div>
        <div className="grand-specialist-2-cont">
          <div className="gg-specialist-2a-cont">{description}</div>
        </div>
      </div>

      <div className="child-specialist-3 child-specialist-with-btn">
        <div className="grand-specialist-3-btn">
          <a href="" target="_blank">
            Related Doctors{" "}
            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="grand-specialist-3-divider"></div>
        <div className="grand-specialist-3-btn">
          <a href="" target="_blank">
            Know More{" "}
            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SpecialistCard;
