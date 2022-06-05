import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon'

export function Home () {
  const [listPoke, setlistPoke] = useState([])

  useEffect(() => {
    getAllPokemon().then(data => Promise.all(data).then(setlistPoke))
  }, [])

  if (listPoke.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div>Lista de Pokemons</div>

    {
      listPoke.map(pokemon => (<li key={pokemon.name}>{pokemon.name}</li>))
    }

    </>
  )
}
