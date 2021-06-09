import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { specialistCards } from "./cards-content";
import SpecialistCard from "./card-component";

const SpecialistList = () => {
  return (
    <main className="specialist-card-main">
      {specialistCards.map((cards) => {
        return <SpecialistCard key={cards.id} {...cards}></SpecialistCard>;
      })}
    </main>
  );
};

ReactDOM.render(<SpecialistList />, document.getElementById("root"));
