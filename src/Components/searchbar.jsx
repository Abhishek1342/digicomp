import React from "react";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="searchbar">
      <form>
        <button class="geoloc">
          <i class="fas fa-map-marker-alt"></i> Delhi
        </button>
        <input
          type="search"
          placeholder="Search for Doctors"
          class="searchbox"
        />
        <button class="submitbtn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
