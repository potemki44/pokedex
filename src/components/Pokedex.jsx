import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './POKEDEX/PokemonCard'
import SearchInput from './POKEDEX/SearchInput'
import SelectType from './POKEDEX/SelectType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
 
  useEffect(() => {
    if(optionType !== 'All'){
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])

  const nameTrainer = useSelector(state => state.counterSlice)

  return (
    <div className='pokedex'>
    
      <h2 className='pokedex_nameTrainer'>Welcome {nameTrainer}: Get'em all!</h2>
      <span className='pokeball_icon'/>
      <SearchInput 
      setPokeSearch={setPokeSearch}
       setOptionType={setOptionType} />
      <SelectType 
        optionType={optionType} 
        setOptionType={setOptionType} 
        setPokeSearch={setPokeSearch}
      />
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex