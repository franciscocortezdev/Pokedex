import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'
import { useLocalStorage, useStorageOffset } from './useLocalStorage.js'

export function usePokeList () {
  // const [listPoke, setlistPoke] = useState([])
  // const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState()
  const [listPoke, setlistPoke, isLStorageP] = useLocalStorage('listPoke', [])
  const [offset, setOffset, isLStorage] = useStorageOffset('offset', 0)

  useEffect(() => {
    console.log('length', listPoke.length, isLStorageP)
    console.log('offset', offset, isLStorage)
    if (isLStorage !== true) {
      setLoading(true)
      getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
        setlistPoke(dat)
        setLoading(false)
      }))
    }
  }, [offset])

  return [listPoke, loading, setOffset, offset]
}
