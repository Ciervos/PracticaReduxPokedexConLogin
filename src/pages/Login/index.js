import React,{useState} from 'react';
import { checkUser } from "../../store";
import { useDispatch} from "react-redux";
import {Link} from  "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const [maestro, setMaestro] = useState("");
  const [contra, setContra] = useState("");

  function handleMaster(e){
    setMaestro(e.target.value)
  }
  
  function handlePass(e){
    setContra(e.target.value)
  }
  
    function handleClick(){
   dispatch(checkUser(maestro,contra));

 }

  return (
 <>   
<div>
  <label>Maestro Pokemón:<input type="text" onChange={handleMaster}/></label>
  <label>Constraseña:<input type="text" onChange={handlePass}/></label>
  <Link to="/"><button onClick={handleClick}>Ingresar</button></Link>
</div>
</>
  )
}

export default Login;
