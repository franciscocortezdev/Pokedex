import React from 'react'
import './CardPokemon.css'

export function CardPokemon ({ Name, Image }) {
  return (

    <div className='CardPokemon'>
      <p className='CardName'>{Name}</p>
      <img className='CardImage' src={Image} alt={Name} />
    </div>
  )
}
