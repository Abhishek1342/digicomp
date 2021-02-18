import React from "react";

// Home-top
import Homelanding from "./Top/home-landing";

// Type
import Type from "./Type/type";

// Counter
import "./Counter/index.scss";
import { counterList } from "./Counter/counter-content";
import Counter from "./Counter/counter-component";

// About
import AboutComponent from "./About/about-component";
import "./About/about.scss";

// Member
import Member from "./Member/member";

// Footer
import Footer from "../Footer/footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Homelanding />

      <Type />

      <div className="count-main">
        {counterList.map((cards) => {
          return <Counter key={cards.id} {...cards}></Counter>;
        })}
      </div>
      <div className="about-main">
        <AboutComponent />
      </div>
      <Member />
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
