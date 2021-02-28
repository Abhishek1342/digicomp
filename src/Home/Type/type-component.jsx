import React, { useState } from "react";
import { Link } from "react-router-dom";

const TypeCard = ({ name, img, link }) => {
  const [visibility, setVisibility] = useState(0);
  const [opacity, setOpacity] = useState(0);
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div
        className="type-card-main"
        onMouseEnter={() => setVisibility(1)}
        onMouseLeave={() => setVisibility(0)}
      >
        <div className="image-child">
          <img src={img} alt={name} />
        </div>
        <div className="name-child">
          {name}&nbsp;
          <i
            class="fas fa-long-arrow-alt-right"
            style={{ opacity: visibility }}
          ></i>
        </div>
      </div>
    </Link>
  );
};

export default TypeCard;
