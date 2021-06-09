import React from "react";
import "./login.css";
import { Textbox, Submit } from "./input";
import InUp from "./inup";

function ChangePassword() {
  return (
    <div className="popup-container customheight">
      <InUp InUpTitle="Change Password" />
      <form className="form-container customgap">
        <Textbox type="password" id="enternewpswd" placeholder="New Password" />
        <Textbox type="password" id="cnfpswd" placeholder="Confirm Password" />
        <Submit id="chngpswd" value="Change Password" />
      </form>
    </div>
  );
}
export default ChangePassword;
