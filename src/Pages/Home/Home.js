import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../../Service/getPokemon'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'

import './Home.css'

export function Home () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [btnUp, setBtnUp] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])
      setLoading(false)
    }))
  }, [offset])

  const newPokemons = (entries, observer) => {
    if (entries[0].isIntersecting) {
      setOffset(prevOffset => prevOffset + 8)
    }
  }

  if (!loading) {
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0
    }
    const target = document.getElementById('observer')
    const observer = new IntersectionObserver(newPokemons, options)
    observer.observe(target)
  }

  const handleUP = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  window.onscroll = () => {
    if (window.scrollY > 100) {
      setBtnUp(true)
    }
    if (window.scrollY < 100) {
      setBtnUp(false)
    }
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

    <button onClick={handleUP} className={ btnUp ? 'btnUpShow btnStart' : 'btnStart'}><i className="iconUP fa-solid fa-angle-up"></i></button>

    <div id='observer'></div>

    </>
  )
}
