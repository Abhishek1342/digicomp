import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { currentCards } from "./cards-content";
import CurrentCard from "./card-component";

const CurrentList = () => {
  return (
    <main className="current-card-main">
      {currentCards.map((cards) => {
        return <CurrentCard key={cards.id} {...cards}></CurrentCard>;
      })}
    </main>
  );
};

ReactDOM.render(<CurrentList />, document.getElementById("root"));
