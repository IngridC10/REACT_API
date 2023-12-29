import React from 'react'
import HeaderComponent from '../HeaderComponent'
import SearchComponent from '../SearchComponent'

import ListadoComponent from '../ListadoComponent'

const HomePrincipal = () => {
  return (
    <div>
        <HeaderComponent/>
        <SearchComponent/>

        <ListadoComponent/>
      
    </div>
  )
}

export default HomePrincipal
