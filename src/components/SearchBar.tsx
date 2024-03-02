import React, { ChangeEvent } from 'react';
import { useState } from "react";

const SearchBar = ({ setSearchFilter, words }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setSearchFilter(() => {
      if (term !== "") {
        return words
          .filter((word: string) => word.startsWith(term.toUpperCase()))
          .slice(0, 5);
      } else {
        return [];
      }
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchFilter([searchTerm.toUpperCase()]);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default SearchBar;
