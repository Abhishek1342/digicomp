import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Top-bar/Navbar";
import DetailCard from "./details/detail-card";
import Cards from "./top";

const DoctorName = () => {
  return (
    <>
      <Navbar />
      <Cards />
      <DetailCard />
      <Footer />
    </>
  );
};

export default DoctorName;
