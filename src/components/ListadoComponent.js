import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';

const ListadoComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => console.log("Error al obtener los datos", error));
  }, []);

  return (
    <div className='pokemon'>
      <h1>Listado de pokemones</h1>
      <ul>
     
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/detail/${pokemon.name}`}>{index + 1}. {pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoComponent;