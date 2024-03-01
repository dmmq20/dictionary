import DefinitionCard from "./components/DefinitionCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import dictionary from "../dictionary.json";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [words, setWords] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    setWords(Object.keys(dictionary).sort());
  }, []);

  return (
    words.length > 0 && (
      <div className="main-container">
        <Title />
        <SearchBar setSearchFilter={setSearchFilter} words={words} />
        {searchFilter.map((word) => (
          <DefinitionCard
            key={word}
            word={word}
            definition={dictionary[word]}
          />
        ))}
      </div>
    )
  );
}

export default App;
