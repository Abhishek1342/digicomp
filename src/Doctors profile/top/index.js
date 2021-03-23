import React from "react";
import "./index.scss";
import DocImg from "./Dr.dummy.webp";
import Symbol from "./symbol.png";
const Cards = () => {
  return (
    <div className="doctors-profile-starting">
      <div className="doctors-profile-top">
        <div className="doctors-profile-top-image">
          <img src={DocImg} alt="Doctor" />
        </div>
        <div className="doctors-profile-top-content">
          <div className="doctors-profile-top-content-child-name">
            Dr. Dummy
          </div>
          <div className="doctors-profile-top-content-child-degree">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <div className="doctors-profile-top-content-child-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            nihil, provident, numquam aspernatur ea deserunt consequatur facere
            optio deleniti pariatur officiis neque quibusdam, impedit
            repellendus aut? Itaque commodi libero ratione quaerat est. Est
            consequatur tenetur ea ipsam corporis magnam dolorum minus? Fugiat
            facere dolorem dolore dolores est voluptatibus velit suscipit!
          </div>
        </div>
      </div>
      <div className="doctors-profile-top-divider">
        <hr />
        <div className="doctors-profile-top-divider-img">
          <img src={Symbol} alt="symbol" />
          <div className="semi-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
