import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailsPokemon from '../components/pages/DetailsPokemon';
import Pokemon from '../components/pages/Pokemon';


const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/pokemon/" element={<Pokemon />} />
      <Route exact path="/detail/:pokemonName" element={<DetailsPokemon />} />
      <Route path="/search/:term" element={<DetailsPokemon />} />
 
    </Routes>
  );
};

export default RouterPrincipal;