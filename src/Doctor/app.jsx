import React from "react";
import "./index.scss";
import { doctorCards } from "./cards-content";
import DoctorCard from "./card-component";
import Navbar from "../Top-bar/Navbar";
import Footer from "../Footer/footer";
const DoctorsList = () => {
  return (
    <body>
      <Navbar />

      <main className="doct-card-main">
        {doctorCards.map((cards) => {
          return <DoctorCard key={cards.id} {...cards}></DoctorCard>;
        })}
      </main>
      <Footer />
    </body>
  );
};

export default DoctorsList;
