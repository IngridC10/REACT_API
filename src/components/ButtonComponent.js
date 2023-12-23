import React, { useState, useEffect } from 'react';

const ButtonComponent = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(40);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
 
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results); 
      })
      .catch(error => {
        console.error("Error al obtener los datos", error);
      });
  }, [limit, offset]);

  const handleBack = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  return (
    <div className='buttones'>
      <button onClick={handleBack} disabled={offset === 0}>
        Back button
      </button>

      <button onClick={handleNext}>
        Next button
      </button>

      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonComponent;