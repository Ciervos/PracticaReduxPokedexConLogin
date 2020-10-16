import React, {useState, useEffect} from 'react';
import { useDispatch} from "react-redux";
import { searchPokemon } from "../../store";
import {Link} from  "react-router-dom";


function Pokedex() {
  const dispatch = useDispatch();
  const [poke, setPoke]= useState(1);   
  const [fullpoke, setFullpoke]= useState([]);   
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

   useEffect(() => {
   
  
   fetchData();
    },[poke]);

   async function fetchData(){
    const data = await fetch(`${baseUrl}/${poke}`);
    const dataJson = await data.json();
 
    setFullpoke(dataJson);
    
    
  }


  function handleInfo(e){
    setPoke(e.target.value)
  }

  function handleClick(){
    dispatch(searchPokemon(fullpoke));
 
  }

  return(<>
  
  <h1>Bienvenido a nuestra Pokedex</h1>
  <input onChange={handleInfo} type="text"/>
 
  <Link to="/pokemon"><button onClick={handleClick}>Buscar</button></Link>
    
  </>)
}

export default Pokedex;