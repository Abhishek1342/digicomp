import React from "react";
import Typewriter from "typewriter-effect";

const MemberCard = ({
  img,
  name,
  merit,
  merit1,
  merit2,
  merit3,
  linkedin,
  github,
  mail,
  instagram,
}) => {
  return (
    <div className="member-card-main">
      <div className="grand-with-img">
        <img src={img} alt={name} />
      </div>
      <div className="grand-with-links">
        <a href={linkedin} target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin-2--v2.png"
            alt="linkedin"
          />
        </a>
        <a href={github} target="_blank">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
          />
        </a>
        <a href={mail} target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/gmail--v2.png"
            alt="mail"
          />
        </a>
        <a href={instagram} target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt="instagram"
          />
        </a>
      </div>
      <div className="grand-with-name">
        <p className="child-1-name">{name}</p>
        <a className="child-1-merit">
          {merit}&nbsp;
          <Typewriter
            className="typewriter"
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(merit1)
                .pauseFor(2500)
                .deleteAll()

                .typeString(merit2)
                .pauseFor(2500)
                .deleteAll()

                .typeString(merit3)
                .pauseFor(2500)
                .deleteAll()

                .start();
            }}
          ></Typewriter>
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
