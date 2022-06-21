import React, { useEffect } from 'react'
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon'
import './Home.css'
import { BtnUpPage } from '../../Components/BtnUpPage/BtnUpPage'
import { Spinner } from '../../Components/Spinner/Spinner'
import { useObserver } from '../../Hooks/useObserver'
import { usePokeList } from '../../Hooks/usePokeList'
import { Helmet } from 'react-helmet'

export function Home () {
  const [observed, elementRef] = useObserver()
  const [listPoke, loading, setOffset, offset] = usePokeList()

  useEffect(() => {
    if (observed) {
      setOffset(offset + 8)
    }
  }, [observed])

  return (
    <>
    <Helmet>
    <title>Home | Pokedex</title>
    <meta name="description" content="List and search for Pokemons" />
    </Helmet>
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
     {listPoke.length !== 0 && <BtnUpPage/> }
    {loading && <Spinner/>}
    <div ref={elementRef}></div>
    </>
  )
}
