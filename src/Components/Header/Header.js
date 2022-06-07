import React from 'react'
import './Header.css'

export function Header () {
  return (
    <nav className='Header'>
      <h1 className='HeaderTitle'>Pokedex</h1>
      <form className='HeaderSearchContainer'>
        <input type='text' placeholder='Type pokemon name' className='Search'/>
        <button className='btnSearch'>Search</button>
      </form>
    </nav>
  )
}
