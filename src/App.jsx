import React from "react";
import Navbar from "./Components/Navbar";
import PageTop from "./Components/page-top";
import Homelanding from "./Components/home-landing";
import Detailcard from "./Components/detail-card";

function App() {
  return (
    <div>
      <Homelanding />
      <Navbar />
      <PageTop />
      <Detailcard />
    </div>
  );
}

export default App;
