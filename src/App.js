import React from 'react';
import './App.css';
import RouterPrincipal from './router/RouterPrincipal';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RouterPrincipal />
        {/* Otros componentes */}
      </ApolloProvider>
    </div>
  );
};

export default App;


// const apibutton = document.getElementById("apiButton");
// const apiData=document.getElementById("apiData")
// const callApi = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then(data => {
//       const pokemonList = data.results.map(pokemon => pokemon.name);
//       apiData.innerText = pokemonList.join(", ");
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }

// apibutton.addEventListener("click", callApi);