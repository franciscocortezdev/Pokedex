import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Header } from './Components/Header/Header'

export default function App () {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />

    </Routes>

    </>

  )
}
