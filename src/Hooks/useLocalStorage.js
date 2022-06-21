import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [isLocalStorage, setIsLocalStorage] = useState()
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setIsLocalStorage(true)
        return JSON.parse(item)
      }
      setIsLocalStorage(false)
      return initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    console.log('value', value)
    console.log(typeof value)
    try {
      // add item to state

      if (isLocalStorage) {
        setStoredValue(value - 8)
        setIsLocalStorage(false)
        console.log('dentro del if')
      } else {
        setStoredValue(value)
        setIsLocalStorage(false)
        console.log('fuera del if')
      }

      // add item to localStorage
      window.localStorage.setItem(key, JSON.stringify(value + 8))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, isLocalStorage]
}
