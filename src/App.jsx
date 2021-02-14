import React from "react";
// Account
import ChangePassword from "./Top-bar/Account/chngpswd";
import ForgotPassword from "./Top-bar/Account/frgtpswd";
import Login from "./Top-bar/Account/login";
import SignUp from "./Top-bar/Account/signup";
// Home-top
import Homelanding from "./Home/Top/home-landing";
// Counter
import "./Home/Counter/index.scss";
import { counterList } from "./Home/Counter/counter-content";
import Counter from "./Home/Counter/counter-component";

// About
import AboutComponent from "./Home/About/about-component";
import "./Home/About/about.scss";

// Footer
import FooterComponent from "./Footer/footer-component";
import "./Footer/footer.css";

const HomePage = () => {
  return (
    <body>
      <Homelanding />
      {/* <ChangePassword />
      <ForgotPassword />
      <Login />
      <SignUp /> */}
      <div className="count-main">
        {counterList.map((cards) => {
          return <Counter key={cards.id} {...cards}></Counter>;
        })}
      </div>
      <div className="about-main">
        <AboutComponent />
      </div>

      <FooterComponent />
    </body>
  );
};
export default HomePage;
