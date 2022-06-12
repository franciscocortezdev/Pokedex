import React from 'react'
import './NotFound.css'
import NotFound from '../../Img/NotFound.png'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'

export function PokemonNFound () {
  return (
    <>
    <div className='NotFoundContainer'>
    <CardPokemon Name={'Pokemon Not Found'} Image={NotFound}/>
    </div>
    </>
  )
}
