import React, { ChangeEvent } from "react";
import { useState } from "react";

interface SearchBarProps {
  setSearchFilter: React.Dispatch<React.SetStateAction<string[]>>;
  words: { [key: string]: string[] };
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
  dictionary: { [key: string]: string } | {};
}

const SearchBar: React.FC<SearchBarProps> = ({
  setSearchFilter,
  words,
  setHistory,
  dictionary,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchFilter(() => {
      const term = e.target.value.toUpperCase();
      if (term !== "") {
        return words[term[0]]
          .filter((word: string) => word.startsWith(term))
          .slice(0, 5);
      } else {
        return [];
      }
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dictionary[searchTerm.toUpperCase()]) {
      const term = searchTerm.toUpperCase();
      setSearchFilter([term]);
      setHistory((history: string[]) =>
        history.includes(term) ? history : [term].concat(history).slice(0, 5)
      );
    } else {
      setSearchFilter([]);
    }
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
