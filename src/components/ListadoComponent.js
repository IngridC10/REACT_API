import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_TEST_DATA = gql`
  query {
    pokemons {
      results {
        name
      }
    }
  }
`;

const ListadoComponent = () => {
  const { loading, error, data } = useQuery(GET_TEST_DATA);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener los datos</p>;

  const pokemons = data.pokemons.results;

  return (
    <div className='pokemon'>
      <h1>Listado de pokemones</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/detail/${pokemon.name}`}>{index + 1}. {pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoComponent;