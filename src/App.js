
import React from 'react'
import './App.css';
import BodyComponent from './components/BodyComponent';
import HeaderComponent from './components/HeaderComponent';
import ButtonComponent from './components/ButtonComponent';
import SearchComponent from './components/SearchComponent';
import RouterPrincipal from './router/RouterPrincipal';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  return (
  

          <RouterPrincipal/>
  //         {/* <HeaderComponent/>
  //         <SearchComponent/>
          
  //         <ButtonComponent/>
  //         <BodyComponent/>
  //  */}
    
    

  
      
   
  )
}

export default App





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