import React, { useState, useEffect } from "react";
import DefinitionCard from "./components/DefinitionCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import dictionary from "../dictionary.json";
import { DictionaryMap } from "./types";

function App() {
  const [words, setWords] = useState<DictionaryMap>({});
  const [searchFilter, setSearchFilter] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setWords(() => {
      const wordsObj: DictionaryMap = Object.keys(dictionary)
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

  const cardsToShow = searchFilter.length > 0 ? searchFilter : history;

  return (
    <div className="main-container">
      <Title />
      <SearchBar
        setSearchFilter={setSearchFilter}
        setHistory={setHistory}
        words={words}
        dictionary={dictionary}
      />
      {cardsToShow.map((word) => (
        <DefinitionCard key={word} word={word} definition={dictionary[word]} />
      ))}
    </div>
  );
}

export default App;
