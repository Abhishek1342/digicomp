import React, { useState } from "react";
import "./login.css";
import Modal from "react-modal";
import { Textbox, PwdField, Submit } from "./input";
import InUp from "./inup";
import Login from "./login";
import { modalStyle } from "../modalStyle";
import axios from "axios";
import { useForm } from "react-hook-form";

function SignUp() {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const { register, handleSubmit, error } = useForm();

    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const { username, phone, email, password, cpassword } = user;

    let name, value;

    const handelInputSignup = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const submitRegister = async (e) => {
        try {
            if (!username || !phone || !email || !password || !cpassword) {
                e.preventDefault();
                console.log("fill all fields");
            } else {
                if (username) {
                } else if (password !== cpassword) {
                    e.preventDefault();
                    console.log("Password do not match");
                } else {
                    e.preventDefault();
                    const res = await axios.post(
                        "http://localhost:8000/user-register",
                        user
                    );

                    let otp = prompt("Please enter OTP:", "");

                    if (otp == null || otp == "") {
                        window.alert("please enter otp sent to your email");
                    } else {
                        const res = await axios.post(
                            "http://localhost:8000/otp",
                            { otp: otp }
                        );
                        console.log(res);
                    }
                    console.log(res);
                }
            }
        } catch (err) {
            console.log(err);
        }
        console.log(e);
    };

    return (
        <div className="popup-container extendheight">
            <InUp InUpTitle="Sign Up" />
            {/* <div className="login-partner">
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
            </div> */}
            <form className="form-container signup-gap">
                <Textbox
                    type="Text"
                    id="username-Signup"
                    // value={user.username}
                    name="username"
                    // onChange={handelInputSignup}
                    placeholder="Enter username"
                    ref={register}
                />
                <Textbox
                    type="tel"
                    id="Phone-Signup"
                    // value={user.phone}
                    name="phone"
                    // onChange={handelInputSignup.bind()}
                    placeholder="Enter Phone Number"
                    ref={register}
                />
                <Textbox
                    type="Email"
                    id="Email-Signup"
                    // value={user.email}
                    name="email"
                    // onChange={handelInputSignup.bind()}
                    placeholder="Enter Email"
                    ref={register}
                />
                <PwdField
                    id="Password-signup"
                    // value={user.password}
                    name="password"
                    // onChange={handelInputSignup}
                    placeholder="Enter Password"
                    ref={register}
                />
                <PwdField
                    id="cnf-password-signup"
                    // value={user.cpassword}
                    name="cpassword"
                    // onChange={handelInputSignup}
                    placeholder="Confirm Password"
                    ref={register}
                />
                <Submit
                    id="submit-signup"
                    value="Sign Up"
                    onClick={handleSubmit(submitRegister)}
                    name="submitSignUp"
                />
            </form>
            <div className="alternative-opt-container">
                <p>
                    Already registered! &nbsp;
                    <a
                        className="pointer-cursor"
                        onClick={() => setModalLoginIsOpen(true)}
                    >
                        Log In
                    </a>
                    <Modal
                        closeTimeoutMS={500}
                        isOpen={modalLoginIsOpen}
                        onRequestClose={() => setModalLoginIsOpen(false)}
                        style={modalStyle}
                    >
                        <Login />
                    </Modal>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
