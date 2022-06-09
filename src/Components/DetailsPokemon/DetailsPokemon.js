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

      <h1 className='DetailsPokemonName'>{pokemon.name}</h1>
      <img className='DetailsImage' src={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <p>Peso: {(pokemon.weight / 10).toString().replace('.', ',')} Kg</p>
      <p>Altura: {(pokemon.height / 10).toString().replace('.', ',')} M</p>
      <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>

      <p>Estadisticas: {pokemon.stats.map(stat =>
        stat.stat.name + ': ' + stat.base_stat
      ).join(', ')}</p>
      <button onClick={handleBack}>Regresar</button>
    </div>
  )
}
