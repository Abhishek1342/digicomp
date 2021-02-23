import React from "react";

const DiseaseCard = ({ img, title, description }) => {
  return (
    <div className="dise-card-main">
      <div className="child-disease-1">
        <div className="child-disease-with-img-disease">
          <div className="grand-disease-1-img">
            <img src={img} alt="Tuberculosis" />
          </div>
          <div className="grand-disease-1-back"></div>
        </div>
        <div className="grand-disease-1-bar" id="right-bar"></div>
        <div className="grand-disease-1-bar" id="left-bar"></div>
      </div>

      <div id="stars" className="child-disease-2 child-disease-with-cont">
        <div className="grand-disease-2-head">{title}</div>
        <div className="grand-disease-2-cont">{description}</div>
      </div>

      <div className="child-disease-3 child-disease-with-btn">
        <div className="grand-disease-3-btn">
          <a className="related" href="" target="_blank">
            Related Doctors <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
        <div className="grand-disease-3-divider"></div>
        <div className="grand-disease-3-btn">
          <a className="know" href="" target="_blank">
            Know More <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DiseaseCard;
