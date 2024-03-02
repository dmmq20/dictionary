import React from 'react';

const DefinitionCard = ({ word, definition }) => {
  if (definition)
    return (
      <div className="definition-card">
        <h2 className="def-card-word">{word}</h2>
        <hr />
        <span className="first-letter">{definition[0]}</span>
        {definition.slice(1)}
      </div>
    );
  return null;
};

export default DefinitionCard;
