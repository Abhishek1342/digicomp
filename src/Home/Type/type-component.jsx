import React from "react";
import { Link } from "react-router-dom";

const TypeCard = ({ name, img, link }) => {
  return (
    <Link to={link}>
      <div className="type-card-main">
        <div className="image-child">
          <img src={img} alt={name} />
        </div>
        <div className="name-child">
          {name}&nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </Link>
  );
};

export default TypeCard;
