import React from 'react'
import P404 from '../../Img/P404.png'
import { useNavigate } from 'react-router-dom'
import './Page404.css'

export function Page404 () {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className='Page404Container'>
      <p className='Page404ERROR'>PAGE NOT FOUND</p>
      <img className='Page404IMG' src={P404} alt='Page404' />

      <p className='Page404ADVISE'>The page you are looking is not available</p>
      <button className='Page404BTN' onClick={handleHome}>Go to Home</button>
    </div>
  )
}
