import React, { useState,useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';


const GET_POKEMON_LIST_DATA = gql`
  query {
    pokemons {
      results {
        name
      }
    }
  }
`;

const GET_POKEMON = gql`
  query GetPokemon($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
      }
    }
  }
`;

const ListadoComponent = () => {
  const { pokemonName } = useParams();
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0); // Cambié el offset inicial a 0
  const { loading, error, data, refetch } = useQuery(GET_POKEMON, {
    variables: { limit, offset },
  });

  const handleBack = () => {
    const newOffset = Math.max(0, offset - limit);
    setOffset(newOffset);
  };

  const handleNext = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
  };

  useEffect(() => {
    refetch({ limit, offset });
  }, [limit, offset, refetch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener los datos</p>;

  const pokemons = data.pokemons.results;

  return (
    <div>
      <h1>Listado de pokemones</h1>
      <div className='buttones'>
        <button onClick={handleBack} disabled={offset === 0}>
          Back button
        </button>
        <button onClick={handleNext}>
          Next button
        </button>
      </div>
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