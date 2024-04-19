import React, { useState } from 'react';

const ProfesionalId = ({ id }) => {
  const [showFullId, setShowFullId] = useState(false);

  const toggleShowFullId = () => {
    setShowFullId(!showFullId);
  };

  return (
    <span onClick={toggleShowFullId}>
      {id ? (
        <span>{showFullId ? id : `${id.slice(0, 6)}...`}</span>
      ) : (
        <span>ID no disponible</span>
      )}
    </span>
  );
};

export default ProfesionalId;
