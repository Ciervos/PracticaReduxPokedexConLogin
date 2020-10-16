import React from 'react';
import {useSelector} from "react-redux";



function Pokemon() {
  const pokemon = useSelector((state)=>state.pokemon)
  return (
<div>
  <h1>{pokemon.name}</h1>
  <img src={pokemon.sprite}/>
  <p>#{pokemon.number}</p>
</div>

  )
}

export default Pokemon;
