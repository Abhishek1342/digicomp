import React from "react";
import "./searchbar.css";

function SearchBar(search) {
  return (
    <div className="searchbar">
      <form>
        <button className="geoloc">
          <i className="fas fa-map-marker-alt"></i> Delhi
        </button>
        <input type="search" placeholder={search.type} className="searchbox" />
        <button className="submitbtn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
