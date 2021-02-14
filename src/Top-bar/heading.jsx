import React from "react";
import "./heading.css";

function Heading(prop) {
  return (
    <div className="title">
      <div className="line"></div>
      <h2 className="titleName">{prop.value}</h2>
      <div className="line"></div>
    </div>
  );
}
export default Heading;
