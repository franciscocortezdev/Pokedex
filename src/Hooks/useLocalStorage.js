import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [isLStorage, setIsLStorage] = useState()
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item) {
        setIsLStorage(true)
        console.log('dentro del if')
        return JSON.parse(item)
      }
      console.log('Fuera del if')
      setIsLStorage(false)
      return initialValue
    } catch (error) {
      console.log(error)
      setIsLStorage(false)
      return initialValue
    }
  })

  const setValue = value => {
    setIsLStorage(false)
    console.log('value', value)
    console.log(typeof value)
    try {
      // added to state
      if (typeof value === 'object') {
        setStoredValue(prevPoke => [...prevPoke, ...value])
      } else {
        setStoredValue(value)
      }
      // added to LocalStorage
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

  return [storedValue, setValue, isLStorage]
}

export function useStorageOffset (key, initialValue) {
  const [isLStorage, setIsLStorage] = useState()
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item) {
        setIsLStorage(true)
        console.log('dentro del if')
        return JSON.parse(item)
      }
      console.log('Fuera del if')
      setIsLStorage(false)
      window.localStorage.setItem(key, JSON.stringify(0))
      return initialValue
    } catch (error) {
      console.log(error)
      setIsLStorage(false)
      return initialValue
    }
  })

  const setValue = value => {
    setIsLStorage(false)
    console.log('value', value)
    console.log(typeof value)
    try {
      // added to state
      if (typeof value === 'object') {
        setStoredValue(prevPoke => [...prevPoke, ...value])
      } else {
        setStoredValue(value)
      }
      // added to LocalStorage

      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, isLStorage]
}
