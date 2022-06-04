import { useState, useEffect } from "react";
import { getAllPokemon } from "../Service/getPokemon"

export  function Home() {
  const [listPoke, setlistPoke] = useState([]);

  useEffect(() => {
    getAllPokemon().then(data => Promise.all(data).then(setlistPoke));
    
  
  }, []);

 

console.log(listPoke);
 
 

  return (
    <div>Home</div>
  )
}
