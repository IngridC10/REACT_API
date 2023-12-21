import React from 'react'
import {Routes,Route, Link,BrowserRouter} from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent'
import SearchComponent from '../components/SearchComponent'
import PokemonComponent from '../components/PokemonComponent'
import BodyComponent from '../components/BodyComponent'

const RouterPrincipal = () => {
  return (

    <Routes>
      <Route path="/body" element={<BodyComponent/>}/>
      <Route path="/button" element={<ButtonComponent/>}/>
      <Route path="/header" element={<HeaderComponent/>}/>
      <Route path="/search" element={<SearchComponent/>}/>
      <Route path="/pokemon" element={<PokemonComponent/>}/>

    </Routes>

  )

}

export default RouterPrincipal
