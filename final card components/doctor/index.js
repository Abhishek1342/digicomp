import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { doctorCards } from "./cards-content";
import DoctorCard from "./card-component";

const DiseaseList = () => {
  return (
    <main className="doct-card-main">
      {doctorCards.map((cards) => {
        return <DoctorCard key={cards.id} {...cards}></DoctorCard>;
      })}
    </main>
  );
};

ReactDOM.render(<DiseaseList />, document.getElementById("root"));
