import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// const GET_POKEMON_DETAILS = gql`
//   query{
  
//     pokemons{
//       results{
//         name
//         image
//       }
//     }
//   }
// `;

const SearchComponent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  // const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
  //   variables: { name: searchTerm }
  // });

  const handleSearch = () => {
    let pokemonNan
    navigate(`/detail/${searchTerm}`);
  };
  // if (loading) return <p>Cargando...</p>;
  // if (error) return <p>Error al obtener los datos</p>;
  // console.log('DATA xxxx', data);
  // const pokemon = data && data.pokemon;

  return (
    <div>
      <h1>Buscar Pokémon</h1>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {/* {pokemon && (
        <div>
          <h2>Detalles del Pokémon</h2>
          <div>
            <p>Nombre: {pokemon.name}</p>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SearchComponent;
