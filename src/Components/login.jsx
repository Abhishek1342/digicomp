import React from "react";
import "./login.css";
import { Textbox, Submit } from "./input";
import InUp from "./inup";

function Login() {
  return (
    <div className="popup-container">
      <InUp InUpTitle="Login" />
      <div className="login-partner">
        <a href="/#">
          <img
            src="https://img.icons8.com/color/38/000000/google-logo.png"
            alt="Google icon"
          />
        </a>
        <a href="/#">
          <img
            src="https://img.icons8.com/fluent-systems-filled/38/000000/mac-os.png"
            alt="Aple icon"
          />
        </a>
        <a href="/#">
          <img
            src="https://img.icons8.com/fluent/38/000000/facebook-new.png"
            alt="FaceBook icon"
          />
        </a>
      </div>
      <form className="form-container">
        <Textbox type="Text" id="username-login" placeholder="Enter username" />
        <Textbox
          type="Password"
          id="password-login"
          placeholder="Enter Password"
        />
        {/* <TnC id="trmncond" value="agree with Terms and Conditions" /> */}
        <Submit id="submit-login" value="Log in" />
      </form>
      <div className="alternative-opt-container">
        <a href="/#">Forgot password</a>
        <p>
          Don't have account? &nbsp;
          <a href="/#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
