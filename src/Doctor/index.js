import React from "react";
import DoctorsList from "./app";
import Detailcard from "../Doctors profile/detail-card";
import ContactUs from "../Contact us/contactus";

const Doctor = () => {
  return (
    <React.Fragment>
      <DoctorsList />
      <ContactUs />
      <Detailcard />
    </React.Fragment>
  );
};

export default Doctor;
