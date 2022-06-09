import React from 'react'
import './DetailsPokemon.css'
import { useNavigate } from 'react-router-dom'

export function DetailsPokemon ({ pokemon }) {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  return (

    <div className='DetailsPokemon'>

      <p className='DetailsPokemonName'>{pokemon.name}</p>
      <img className='DetailsImage' src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>

      <p>Estadisticas: {pokemon.stats.map(stat =>
        stat.stat.name + ': ' + stat.base_stat
      ).join(', ')}</p>
      <button onClick={handleBack}>Regresar</button>
    </div>
  )
}
