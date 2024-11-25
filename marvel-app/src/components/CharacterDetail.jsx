import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const ts = '1'; // Example timestamp
      const publicKey = '29ef43671d735b0073b1fd7115c26d9a';
      const hash = '48552e6249cccfd9dc8adc34f421a61f'; // Replace with your actual hash

      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        console.log(response.data); // Check the API response
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details:', error);
        alert('Failed to fetch character details. Please check the console for more details.');
      }
    };

    if (characterId) {
      fetchCharacterDetail();
    }
  }, [characterId]);

  if (!character) {
    return <div>Select a character to see details</div>;
  }

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
