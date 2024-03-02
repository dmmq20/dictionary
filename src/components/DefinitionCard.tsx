import React from "react";

const DefinitionCard = ({ word, definition }) => {
  if (definition) {
    return (
      <div className="definition-card">
        <h2>{word}</h2>
        <hr />
        <p>{definition}</p>
      </div>
    );
  }
  return null;
};

export default DefinitionCard;
