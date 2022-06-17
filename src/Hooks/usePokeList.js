import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'

export function usePokeList () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let offsetToUse
    setLoading(true)

    if (offset === null) {
      if (localStorage.getItem('offset') === null) {
        offsetToUse = 0
      } else {
        offsetToUse = localStorage.getItem('offset')
      }
    } else {
      offsetToUse = offset
    }
    console.log(localStorage.getItem('offset'))
    console.log('of', offsetToUse)
    getAllPokemon(offsetToUse).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])

      setLoading(false)
      localStorage.setItem('offset', offsetToUse)
    }))
  }, [offset])

  return [listPoke, loading, setOffset]
}
