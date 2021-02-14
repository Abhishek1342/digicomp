import React from "react";
import "./input.css";

function Textbox(props) {
  return (
    <input
      className="input-field"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
}
function Submit(prop) {
  return (
    <input
      className="input-field submit"
      type="submit"
      id={prop.id}
      value={prop.value}
    />
  );
}
// function TnC(prop) {
//   return (
//     <input className="checkbox-field" type="checkbox" value={prop.value} />
//     <label>{prop.value}</label>
//   );
// }

export { Textbox, Submit };
