import React, { useState, useEffect } from 'react'
import './BtnUpPage.css'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export function BtnUpPage () {
  const [btnUp, setBtnUp] = useState(false)
  const [position, setPosition] = useLocalStorage('position', 0)

  const handleUP = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.onscroll = () => {
    console.log(position)
    setPosition(window.scrollY)
    if (window.scrollY > 100) {
      setBtnUp(true)
    }
    if (window.scrollY < 100) {
      setBtnUp(false)
    }
  }
  useEffect(() => {
    window.scrollTo({ top: position })
  }, [])

  return (
    <button onClick={handleUP} className={ btnUp ? 'btnUpShow btnStart' : 'btnStart'}><i className="iconUP fa-solid fa-angle-up"></i></button>
  )
}
