import React from "react";
import "./Search.css";

const Search = ({ search, handleSearch, clearSearch }) => {
  return (
    <div className="search-container">
      <div className="input-field">
        Search:
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          className="search-field"
        />
        {search && (
          <button className="clear-button" onClick={clearSearch}>
            Clear search
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
