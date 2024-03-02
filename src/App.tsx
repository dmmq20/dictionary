import React from "react";
import DefinitionCard from "./components/DefinitionCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import dictionary from "../dictionary.json";
import { useState, useEffect } from "react";

type Dictionary = { [key: string]: string[] };

function App() {
  const [words, setWords] = useState<Dictionary>({});
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    setWords(() => {
      const wordsObj: Dictionary = Object.keys(dictionary)
        .sort()
        .reduce((acc, curr) => {
          const ch = curr[0];
          if (acc[ch]) acc[ch].push(curr);
          else acc[ch] = [curr];
          return acc;
        }, {});
      return wordsObj;
    });
  }, []);

  return (
    <div className="main-container">
      <Title />
      <SearchBar setSearchFilter={setSearchFilter} words={words} />
      {searchFilter.map((word) => (
        <DefinitionCard key={word} word={word} definition={dictionary[word]} />
      ))}
    </div>
  );
}

export default App;
