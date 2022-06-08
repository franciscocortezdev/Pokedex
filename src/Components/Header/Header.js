import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
export function Header () {
  const [searchPoke, setSearchPoke] = useState()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setSearchPoke(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/pokemon/${searchPoke}`)
  }

  return (
    <nav className='Header'>
      <h1 className='HeaderTitle'>Pokedex</h1>
      <form onSubmit={handleSubmit} className='HeaderSearchContainer'>
        <input onChange={handleChange} type='text' placeholder='Type pokemon name' className='Search'/>
        <button className='btnSearch'>Search</button>
      </form>
    </nav>
  )
}
