import React from "react";

// CSS
import "./search.styles.css";

const Search = ({ onSearch, query, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={query}
      onChange={onSearch}
    />
  );
};

export default Search;
