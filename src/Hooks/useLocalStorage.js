import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    console.log('value', value)
    console.log(typeof value)
    try {
      if (typeof value === 'object') {
        setStoredValue(prevPoke => [...prevPoke, ...value])
      } else {
        setStoredValue(value)
      }
      const item = window.localStorage.getItem(key)
      if (item === null) {
        window.localStorage.setItem(key, JSON.stringify(value))
      } else {
        const prevPokes = JSON.parse(item)
        prevPokes.push(...value)
        window.localStorage.setItem(key, JSON.stringify(prevPokes))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
