import DefinitionCard from "./components/DefinitionCard";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="main-container">
      <Title />
      <SearchBar />
      <DefinitionCard />
    </div>
  );
}

export default App;
