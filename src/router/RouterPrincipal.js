import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyComponent from './BodyComponent';
import PokemonDetailsComponent from './PokemonDetailsComponent'; 

const RouterPrincipal = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BodyComponent} />
        <Route path="/pokemon/:name" component={PokemonDetailsComponent} />
      </Switch>
    </Router>
  );
};

export default RouterPrincipal;