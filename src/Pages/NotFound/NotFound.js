import React from 'react'
import './NotFound.css'
import NotFound from '../../Img/NotFound.png'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'
import { useNavigate } from 'react-router-dom'

export function PokemonNFound () {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/Pokedex/')
  }
  return (
    <>
    <div className='NotFoundContainer'>
    <CardPokemon Name={'Pokemon Not Found'} Image={NotFound}/>
    <button className='btnHome' onClick={handleHome}>Go to Home</button>
    </div>
    </>
  )
}
