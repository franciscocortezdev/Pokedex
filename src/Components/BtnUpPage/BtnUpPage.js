import React, { useState } from 'react'
import './BtnUpPage.css'

export function BtnUpPage () {
  const [btnUp, setBtnUp] = useState(false)

  const handleUP = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setBtnUp(true)
    }
    if (window.scrollY < 100) {
      setBtnUp(false)
    }
  }

  return (
    <button onClick={handleUP} className={ btnUp ? 'btnUpShow btnStart' : 'btnStart'}><i className="iconUP fa-solid fa-angle-up"></i></button>
  )
}
