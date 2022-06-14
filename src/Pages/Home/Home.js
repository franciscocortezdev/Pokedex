import React, { useState, useEffect, useRef } from 'react'
import { getAllPokemon } from '../../Service/getPokemon'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'
import './Home.css'
import { BtnUpPage } from '../../Components/BtnUpPage/BtnUpPage'
import { Spinner } from '../../Components/Spinner/Spinner'

export function Home () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const elObserver = useRef()

  useEffect(() => {
    setLoading(true)
    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])
      setLoading(false)
    }))
  }, [offset])

  useEffect(() => {
    const observer = new IntersectionObserver(newPokemons, {
      root: null,
      rootMargin: '5px',
      threshold: 0.5
    })
    observer.observe(elObserver.current)
    if (visible) {
      setOffset(prevOffset => prevOffset + 8)
    }
  }, [visible])

  const newPokemons = (entries) => {
    setVisible(entries[0].isIntersecting)
  }

  return (
    <>

    <div className='ListPokemon'>

    {
      listPoke.length === 0
        ? <Spinner/>
        : listPoke.map(pokemon => (
        <CardPokemon key={pokemon.id} Name={pokemon.name} Image={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default}/>

        ))
    }

    </div>

    <BtnUpPage/>
    {loading && <Spinner/>}

    <div ref={elObserver}></div>

    </>
  )
}
