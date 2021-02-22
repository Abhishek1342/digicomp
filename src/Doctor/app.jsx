import React from "react";
import "./index.scss";
import { doctorCards } from "./cards-content";
import DoctorCard from "./card-component";
const DoctorsList = () => {
  return (
    <main className="doct-card-main">
      {doctorCards.map((cards) => {
        return <DoctorCard key={cards.id} {...cards}></DoctorCard>;
      })}
    </main>
  );
};

export default DoctorsList;
