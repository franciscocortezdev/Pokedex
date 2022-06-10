import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export function Header () {
  const handleBack = () => {
    navigate('/')
  }

  const [searchPoke, setSearchPoke] = useState()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const value = e.target.value
    setSearchPoke(value.toLowerCase())
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchPoke('')
    navigate(`/pokemon/${searchPoke}`)
  }

  return (
    <nav className='Header'>
      <h1 onClick={handleBack} className='HeaderTitle'>Pokedex</h1>
      <form onSubmit={handleSubmit} className='HeaderSearchContainer'>
        <input onChange={handleChange} type='text' placeholder='Type pokemon name' className='Search' value={searchPoke}/>
        <button className='btnSearch'>Search</button>
      </form>
    </nav>
  )
}
