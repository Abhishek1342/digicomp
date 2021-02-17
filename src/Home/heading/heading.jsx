import React from "react";
import "./heading.scss";
const Heading = (props) => {
  return (
    <div className="heading-home">
      <div className="dash-home"></div>
      <div className="title-home">{props.head}</div>
      <div className="dash-home"></div>
    </div>
  );
};

export default Heading;
