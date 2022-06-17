import React, { useEffect } from 'react'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'
import './Home.css'
import { BtnUpPage } from '../../Components/BtnUpPage/BtnUpPage'
import { Spinner } from '../../Components/Spinner/Spinner'
import { useObserver } from '../../Hooks/useObserver'
import { usePokeList } from '../../Hooks/usePokeList'

export function Home () {
  const [observed, elementRef] = useObserver()
  const [listPoke, loading, setOffset] = usePokeList()

  useEffect(() => {
    if (observed) {
      setOffset(prevOffset => prevOffset + 8)
    }
  }, [observed])

  return (
    <>

    <div className='ListPokemon'>

    {
      listPoke.length === 0
        ? <Spinner/>
        : listPoke.map(pokemon => (
        <CardPokemon
        key={pokemon.id}
        Name={pokemon.name}
        Image={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default}/>
        ))
    }

    </div>

    <BtnUpPage/>
    {loading && <Spinner/>}

    <div ref={elementRef}></div>

    </>
  )
}
