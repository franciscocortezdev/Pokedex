import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../../Service/getPokemon'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'

import './Home.css'

export function Home () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])
    }))
  }, [offset])

  return (
    <>

    <div className='ListPokemon'>
    {
      listPoke.length === 0
        ? <h1>Cargando...</h1>
        : listPoke.map(pokemon => (
        <CardPokemon key={pokemon.id} Name={pokemon.name} Image={pokemon.sprites.other.dream_world.front_default}/>
        ))
    }
    </div>
    <button onClick={() => { setOffset(offset => offset + 5) }}>More Pokemon</button>

    </>
  )
}
