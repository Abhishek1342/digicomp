import React, { useState } from "react";
import Modal from "react-modal";
import "./login.css";
import { Textbox, PwdField, Submit } from "./input";
import InUp from "./inup";
import SignUp from "./signup";
import ForgotPassword from "./frgtpswd";
import { modalStyle } from "../modalStyle";

function Login() {
        const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
        const [modalForgetIsOpen, setModalForgetIsOpen] = useState(false);
        const [login, setLogin] = useState({ email: "", password: "" });

        const handelInputs = (e) => {
                let name, value;
                name = e.target.name;
                value = e.target.value;
                setLogin({ ...value, [name]: value });
        };
        const submitLogin = async (e) => {
                e.preventDefault();
                const res = await fetch("http://localhost:8000/user-login", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        data: JSON.stringify(login),
                });
                console.log(res);
        };

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
                                <Textbox
                                        type="Text"
                                        id="username-login"
                                        placeholder="Enter username"
                                        onChange={handelInputs}
                                        name="email"
                                        value={login.email}
                                />
                                <PwdField
                                        id="password-login"
                                        placeholder="Enter Password"
                                        onChange={handelInputs}
                                        name="password"
                                        value={login.password}
                                />
                                {/* <TnC id="trmncond" value="agree with Terms and Conditions" /> */}
                                <Submit
                                        id="submit-login"
                                        value="Log in"
                                        onClick={submitLogin}
                                />
                        </form>
                        <div className="alternative-opt-container">
                                <a
                                        className="pointer-cursor"
                                        onClick={() =>
                                                setModalForgetIsOpen(true)
                                        }
                                >
                                        Forgot password
                                </a>
                                <Modal
                                        closeTimeoutMS={500}
                                        isOpen={modalForgetIsOpen}
                                        onRequestClose={() =>
                                                setModalForgetIsOpen(false)
                                        }
                                        style={modalStyle}
                                >
                                        <ForgotPassword />
                                </Modal>
                                <p>
                                        Don't have account? &nbsp;
                                        <a
                                                className="pointer-cursor"
                                                onClick={() =>
                                                        setModalSignupIsOpen(
                                                                true
                                                        )
                                                }
                                        >
                                                Sign Up
                                        </a>
                                        <Modal
                                                closeTimeoutMS={500}
                                                isOpen={modalSignupIsOpen}
                                                onRequestClose={() =>
                                                        setModalSignupIsOpen(
                                                                false
                                                        )
                                                }
                                                style={modalStyle}
                                        >
                                                <SignUp />
                                        </Modal>
                                </p>
                        </div>
                </div>
        );
}

export default Login;
