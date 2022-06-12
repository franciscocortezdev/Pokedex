import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Header } from './Components/Header/Header'
import { Details } from './Pages/Details/Details'
import { Page404 } from './Pages/Page404/Page404'

export default function App () {
  return (
    <>
    <div className='appContainer'>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon/:id" element={<Details />} />
    <Route path="*" element={<Page404/>} />
    </Routes>

    </div>

    </>
  )
}
