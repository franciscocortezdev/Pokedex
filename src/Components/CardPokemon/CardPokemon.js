import React from 'react'
import './CardPokemon.css'
import { useNavigate } from 'react-router-dom'

export function CardPokemon ({ Name, Image }) {
  const navigate = useNavigate()
  const handlePokemon = () => {
    navigate(`/Pokedex/pokemon/${Name}`)
  }

  return (

    <div className='CardPokemon'>
      <p className='CardName'>{Name}</p>
      <img className='CardImage' src={Image} alt={Name} />

      <button onClick={handlePokemon} className='btnDetails'>View Details</button>
    </div>

  )
}
