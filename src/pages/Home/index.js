import React from 'react';
import {useSelector} from "react-redux";
import Pokedex from '../../components/Pokedex';




function Home() {
  const logged = useSelector((state)=>state.usuario.log)
  return (
<div>
  {logged? <Pokedex/>:<h1>Usted no esta loggeado en la pokedex, porfavor intente nuevamente</h1>}
</div>

  )
}

export default Home;
