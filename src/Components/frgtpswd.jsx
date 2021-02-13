import React from "react";
import "./login.css";
import { Textbox, Submit } from "./input";
import InUp from "./inup";

function ForgotPassword() {
  return (
    <div className="popup-container mksmll">
      <InUp InUpTitle="Forgot Password" />
      <form className="form-container mkgap">
        <Textbox
          type="Text"
          id="frgtpswd-enter-email"
          placeholder="Enter Email"
        />
        <Submit id="submit-OTP" value="Get OTP" />
      </form>
    </div>
  );
}
export default ForgotPassword;
