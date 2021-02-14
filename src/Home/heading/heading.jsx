import React from "react";
import "./heading.scss";
const Heading = (props) => {
  return (
    <div className="heading">
      <div className="dash"></div>
      <div className="title">{props.head}</div>
      <div className="dash"></div>
    </div>
  );
};

export default Heading;
