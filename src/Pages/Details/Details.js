import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../Service/getPokemon'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'

export function Details () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPokemon(id).then(data => {
      setPokemon(data)
      setLoading(false)
    })
  }, [id])

  return (
    <>
    <h1>Details</h1>
    {
    loading
      ? <h1>Cargando...</h1>
      : <CardPokemon key={pokemon.id} Name={pokemon.name} Image={pokemon.sprites.other.dream_world.front_default}/>
    }

    </>
  )
}
