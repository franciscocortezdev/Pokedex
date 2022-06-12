import React from 'react'
import P404 from '../../Img/P404.png'
import { useNavigate } from 'react-router-dom'

export function Page404 () {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }

  return (
    <>
    <h1>Page404</h1>
    <p>Page not found</p>
    <img src={P404} alt='Page404' />
    <button onClick={handleHome}>Go to Home</button>
    </>
  )
}
