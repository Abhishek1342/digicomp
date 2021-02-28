import React from "react";
import DoctorsList from "./app";
import Detailcard from "../Doctors profile/detail-card";

const Doctor = () => {
  return (
    <React.Fragment>
      <DoctorsList />
      <Detailcard />
    </React.Fragment>
  );
};

export default Doctor;
