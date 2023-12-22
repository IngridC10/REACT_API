import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailsPokemon from '../components/pages/DetailsPokemon';
import HomePrincipal from '../components/pages/HomePrincipal';


const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePrincipal />} />
      <Route path="/detail/:id" element={<DetailsPokemon />} />
      <Route path="/search/:term" element={<DetailsPokemon />} /> 
    </Routes>
  );
};

export default RouterPrincipal;