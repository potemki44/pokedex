import { useState } from 'react'
import './App.css'
import PokemonDetails from './components/PokemonDetails'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import ReactHowler from 'react-howler'







function App() {


  return (
    <div className="App">
      <header className='App_header'>
        <div className='App_header_div'></div>

      </header>
      <div className='pokedex_logo'></div>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokemonDetails />} />
          <Route />

        </Route>

      </Routes>

    </div>
  )
}

export default App
