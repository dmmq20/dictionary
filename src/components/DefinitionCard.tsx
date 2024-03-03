import React, { useState } from "react";

interface DefinitionCardProps {
  word: string;
  definition: string;
}

const DefinitionCard: React.FC<DefinitionCardProps> = ({
  word,
  definition,
}) => {
  const maxLength = 150;
  const [showFullDefinition, setShowFullDefinition] = useState<boolean>(false);

  const toggleDefinition = () => {
    setShowFullDefinition(!showFullDefinition);
  };

  if (definition) {
    return (
      <div className="definition-card">
        <h2>{word}</h2>
        <hr />
        <p>
          {showFullDefinition
            ? definition
            : `${definition.slice(0, maxLength)}... `}
          {!showFullDefinition && definition.length > maxLength && (
            <span onClick={toggleDefinition} className="show-more">
              show more
            </span>
          )}
        </p>
      </div>
    );
  }

  return null;
};

export default DefinitionCard;
