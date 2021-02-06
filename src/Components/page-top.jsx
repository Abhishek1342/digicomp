import React from "react";
import "./page-top.css";
import "../Components/Images/pattern/cubes_@2X.png";
import SearchBar from "./searchbar";


function PageTop() {
  return(
  <div className="landing">
  <div className="texture">
  <h2>-     DOCTORS   -</h2>
  <h3 className="page-info">Search on the basis of Doctor’s name</h3>

    <SearchBar />
  </div>

  </div>);
}
export default PageTop;
