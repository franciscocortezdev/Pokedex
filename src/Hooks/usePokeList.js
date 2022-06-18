import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'

export function usePokeList () {
  const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setlistPoke(prevPoke => [...prevPoke, ...dat])

      setLoading(false)
    }))
  }, [offset])

  return [listPoke, loading, setOffset]
}
