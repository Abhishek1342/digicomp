import React from "react";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="searchbar">
      <form>
        <button className="geoloc">
          <i className="fas fa-map-marker-alt"></i> Delhi
        </button>
        <input
          type="search"
          placeholder="Search for Doctors"
          className="searchbox"
        />
        <button className="submitbtn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
