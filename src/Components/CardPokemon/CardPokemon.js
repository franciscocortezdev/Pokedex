import React, { useEffect } from 'react'
import './CardPokemon.css'
import { useNavigate } from 'react-router-dom'
import { useStorageOffset } from '../../Hooks/useLocalStorage'

export function CardPokemon ({ Name, Image }) {
  const navigate = useNavigate()
  const [position, setPosition] = useStorageOffset('position', 0)

  const handlePokemon = () => {
    navigate(`/Pokedex/pokemon/${Name}`)
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.scrollTo({ top: position })
  }, [])

  return (

    <div className='CardPokemon'>
      <p className='CardName'>{Name}</p>
      <img className='CardImage' src={Image} alt={Name} />

      <button onClick={handlePokemon} className='btnDetails'>View Details</button>
    </div>

  )
}
