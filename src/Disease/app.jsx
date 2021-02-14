import React from "react";
import Navbar from "../Top-bar/Navbar";
import PageTop from "../Top-bar/page-top";

import "./index.scss";

import { diseaceCards } from "./cards-content";
import DiseaseCard from "./card-component";

const DiseasePage = () => {
  return (
    <body>
      {/* <header></header> */}
      <Navbar />
      <PageTop title="Disease" tag="Disease" search="Search for Diseases" />

      <main className="disease-card-main">
        {diseaceCards.map((cards) => {
          return <DiseaseCard key={cards.id} {...cards}></DiseaseCard>;
        })}
      </main>
    </body>
  );
};

export default DiseasePage;
