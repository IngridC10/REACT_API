import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BodyComponent = () => {
const[pokemonList,setpokemonList]=useState([])



  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        setpokemonList(data.results);
      })
      .catch(error => console.log("Error al obtener los datos", error));
  }, []);

  return (
    
    <div className='pokemon'>
      <h1>Listado de pokemones</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/detail/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BodyComponent;
