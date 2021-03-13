import React, { useEffect } from "react";
import HomePage from "./app";

const Home = () => {
  useEffect(() => {
    document.title = `DIGICOMP`;
  },[]);
  return <HomePage />;
};

export default Home;
