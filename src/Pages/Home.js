import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon'
import { CardPokemon } from '../Components/CardPokemon'
import './Home.css'

export function Home () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(0)
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllPokemon(offset).then(data => Promise.all(data).then(setlistPoke))
  }, [offset])

  if (listPoke.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div>Lista de Pokemons</div>
    <div className='ListPokemon'>
    {
      listPoke.map(pokemon => (
        <CardPokemon key={pokemon.id} Name={pokemon.name} Image={pokemon.sprites.other.dream_world.front_default}/>
      ))
    }
    </div>
    <button onClick={() => { setOffset(offset => offset + 5) }}>More Pokemon</button>

    </>
  )
}
