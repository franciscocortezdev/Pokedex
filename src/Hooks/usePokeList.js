import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'
import { useLocalStorage } from './useLocalStorage.js'

export function usePokeList () {
// const [listPoke, setlistPoke] = useState([])
  const [offset, setOffset] = useState(null)
  const [loading, setLoading] = useState(true)
  const [storedValue, setValue] = useLocalStorage('listPoke', [])
  // const [offset, setOffset] = useLocalStorage('offset', [])
  console.log('store', storedValue)

  useEffect(() => {
    setLoading(true)

    getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
      setValue(dat)

      setLoading(false)
    }))
  }, [offset])

  return [storedValue, loading, setOffset]
}
