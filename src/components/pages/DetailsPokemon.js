import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";


const GET_TEST_DATA = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
      }
    }
  }
`;

const DetailComponent = (props) => {
  let { pokemonName } = useParams();   
  
  console.log('namePOkemon', pokemonName);
  const { loading, error, data } = useQuery(GET_TEST_DATA, {
        variables: { name: pokemonName }
  
  });
  console.log('data !!!!', data);
  // useEffect(() => {
  //   console.log('Nombre del Pokémon:', namePokemon);
  //   const { loading, error, data } = useQuery(GET_TEST_DATA, {
  //     variables: { name: namePokemon },
  //   });
  // }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener los datos</p>;
  
  const pokemon = data.pokemon;

  return (
    <div>
      <h2>Prueba de consulta GraphQL</h2>
      <div>
        <p>Nombre: {pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default DetailComponent;


