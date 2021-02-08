import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { diseaceCards } from "./cards-content";
import DiseaseCard from "./card-component";

const DiseaseList = () => {
  return (
    <main className="disease-card-main">
      {diseaceCards.map((cards) => {
        return <DiseaseCard key={cards.id} {...cards}></DiseaseCard>;
      })}
    </main>
  );
};

ReactDOM.render(<DiseaseList />, document.getElementById("root"));
