import React from "react";
import "./index.scss";
import { specialistCards } from "./cards-content";
import SpecialistCard from "./card-component";
import Navbar from "../Top-bar/Navbar";
import Footer from "../Footer/footer";
import PageTop from "../Top-bar/page-top";

const SpecialistList = () => {
  return (
    <body>
      <Navbar />
      <PageTop
        title="Specialists"
        tag="specialisation"
        search="Search for specialisations"
      />

      <main className="specialist-card-main">
        {specialistCards.map((cards) => {
          return <SpecialistCard key={cards.id} {...cards}></SpecialistCard>;
        })}
      </main>
      <Footer />
    </body>
  );
};

export default SpecialistList;
