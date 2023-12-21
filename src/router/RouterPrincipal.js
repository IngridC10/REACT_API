import React from 'react'
import {Routes,Route, Link,BrowserRouter} from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent'

const RouterPrincipal = () => {
  return (

   

    <Routes>
      <Route path="/button" element={<ButtonComponent/>}/>
      <Route path="/header" element={<HeaderComponent/>}/>

    </Routes>

  )

}

export default RouterPrincipal
