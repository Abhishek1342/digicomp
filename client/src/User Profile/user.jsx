import React from "react";
import Navbar from "../Top-bar/Navbar";
import UserDetails from "./user-details";
import Footer from "../Footer/footer";

const User = () => {
  return (
    <div>
      <Navbar />
      <UserDetails />
      <Footer />
    </div>
  );
};

export default User;
