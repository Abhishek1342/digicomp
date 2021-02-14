import React from "react";
import "./page-top.css";
import "../Images/pattern/cubes_@2X.png";
import SearchBar from "./searchbar";
import Heading from "./heading";

function PageTop(heading) {
  return (
    <div className="landing">
      <div className="texture">
        {/* for changing title */}
        <Heading value={heading.title} />
        <h3 className="page-info">
          {/* for changing tag line */}
          Search on the basis of {heading.tag}’s name
        </h3>
        <SearchBar type={heading.search} />
      </div>
    </div>
  );
}
export default PageTop;
