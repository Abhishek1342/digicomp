import React from "react";
import Heading from "../heading/heading";
import MemberCard from "./member-component";
import "./index.scss";

import { memberDetail } from "./member-content";

function Member() {
  return (
    <div className="heading-members">
      <Heading head="Working Members" />
      <div className="member-main">
        <div className="member-card">
          {memberDetail.map((cards) => {
            return <MemberCard key={cards.id} {...cards}></MemberCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Member;
