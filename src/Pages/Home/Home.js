import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../../Service/getPokemon'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'
import './Home.css'
import { BtnUpPage } from '../../Components/BtnUpPage/BtnUpPage'

export function Home () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])
      setLoading(false)
    }))
  }, [offset])

  useEffect(() => {
    if (visible) {
      setOffset(prevOffset => prevOffset + 8)
    }
  }, [visible])

  const newPokemons = (entries) => {
    setVisible(entries[0].isIntersecting)
  }

  if (!loading) {
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0.5
    }
    const target = document.getElementById('observer')
    const observer = new IntersectionObserver(newPokemons, options)
    observer.observe(target)
  }

  return (
    <>

    <div className='ListPokemon'>
    {
      listPoke.length === 0
        ? <h1>Loading...</h1>
        : listPoke.map(pokemon => (
        <CardPokemon key={pokemon.id} Name={pokemon.name} Image={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default}/>

        ))
    }

    </div>

    <BtnUpPage/>

    <div id='observer'></div>

    </>
  )
}
