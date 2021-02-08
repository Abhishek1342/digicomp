import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { pastCards } from "./cards-content";
import PastCard from "./card-component";

const PastList = () => {
  return (
    <main className="past-card-main">
      {pastCards.map((cards) => {
        return <PastCard key={cards.id} {...cards}></PastCard>;
      })}
    </main>
  );
};

ReactDOM.render(<PastList />, document.getElementById("root"));
