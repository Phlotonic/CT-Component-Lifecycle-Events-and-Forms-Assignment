import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css'; // Make sure to import the CSS file

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div className="app">
      <CharacterList onCharacterClick={handleCharacterClick} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
};

export default App;
