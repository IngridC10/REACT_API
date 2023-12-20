import React, { useState, useEffect } from 'react';

const BodyComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => console.log("Error al obtener los datos", error));
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => {
          setPokemonDetails(data);
        })
        .catch(error => console.log("Error al obtener los detalles", error));
    }
  }, [selectedPokemon]);

  const handlePokemonClick = (pokemonId) => {
    setSelectedPokemon(pokemonId);
  };

  return (
    <div>
      <h1>Listado de pokemones</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index} onClick={() => handlePokemonClick(index + 1)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      {pokemonDetails && (
        <div>
          <h2>Detalles de Pokémon</h2>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <p>ID: {pokemonDetails.id}</p>
          <p>Nombre: {pokemonDetails.name}</p>
          <p>Peso:{pokemonDetails.weight}</p>
          <p>Talla:{pokemonDetails.height}</p>

        </div>
      )}
    </div>
  );
};

export default BodyComponent;



// const PokeList = () => {
//   const [pokemonList, setPokemonList] = useState([]);

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
//       .then(response => response.json())
//       .then(data => {
//         setPokemonList(data.results);
//       })
//       .catch(error => {
//         console.error('Error Pokémon ');
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Listado de Pokémon</h2>
//       <ul>
//         {pokemonList.map((pokemon, index) => (
//           <li key={index}>{pokemon.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PokeList;






// const BodyComponent = () => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [pokemonDetails, setPokemonDetails] = useState([]);

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
//       .then(response => response.json())
//       .then(data => {
//         setPokemonList(data.results);
//       })
//       .catch(error => {
//         console.error('Error fetching Pokemon:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const fetchPokemonDetails = async () => {
//       const details = await Promise.all(
//         pokemonList.map(async pokemon => {
//           const response = await fetch(pokemon.url);
//           const data = await response.json();
//           return {
//             id: data.id,
//             name: data.name,
//             image: data.sprites.front_default, 
//             height: data.height 
//           };
//         })
//       );
//       setPokemonDetails(details);
//     };

//     if (pokemonList.length > 0) {
//       fetchPokemonDetails();
//     }
//   }, [pokemonList]);

//   return (
//     <div>
//       <h2>Listado de Pokémon</h2>
//       <ul>
//         {pokemonDetails.map(pokemon => (
//           <li key={pokemon.id}>
//             <img src={pokemon.image} alt={pokemon.name} />
//             <p>ID: {pokemon.id}</p>
//             <p>Nombre: {pokemon.name}</p>
//             <p>Altura: {pokemon.height}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BodyComponent;