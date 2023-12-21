import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPokemon = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        setPokemonDetails(data);
      })
      .catch(error => console.log("Error al obtener los detalles", error));
  }, [id]);

  return (
    <div className='detail'>
      {pokemonDetails && (
        <div>
          <h2>Detalles de Pokémon</h2>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <p>ID: {pokemonDetails.id}</p>
          <p>Nombre: {pokemonDetails.name}</p>
          <p>Peso: {pokemonDetails.weight}</p>
          <p>Talla: {pokemonDetails.height}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPokemon;