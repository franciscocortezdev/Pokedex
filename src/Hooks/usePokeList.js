import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'
import { useLocalStorage } from './useLocalStorage.js'

export function usePokeList () {
  const [listPoke, setlistPoke] = useState([])
  const [loading, setLoading] = useState(true)
  // const [storedValue, setValue] = useLocalStorage('listPoke', [])
  const [offset, setOffset, isLocalStorage] = useLocalStorage('offset', 0)

  useEffect(() => {
    setLoading(true)
    const limit = 0
    if (isLocalStorage) {
      getAllPokemon(offset, limit).then(data => Promise.all(data).then(dat => {
        setlistPoke(prev => [...prev, ...dat])

        setLoading(false)
      }))
    } else {
      const limit = 8
      getAllPokemon(limit, offset).then(data => Promise.all(data).then(dat => {
        setlistPoke(prev => [...prev, ...dat])

        setLoading(false)
      }))
    }
  }, [offset, isLocalStorage])

  return [listPoke, loading, setOffset, offset]
}
