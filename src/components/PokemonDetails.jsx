import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'




const PokemonDetails = () => {
 

  const { name } = useParams()
  const [pokeInfo, setPokeInfo] = useState()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(pokeInfo)
  const navigate = useNavigate()
  const returnHome = () => { navigate("/pokedex") }
console.log(pokeInfo?.sprites.other)

  return (

    <article className={`pokemon_Details bg-${pokeInfo?.types[0].type.name}`}>
      
      <img className='pokemon_Details_Ima' src={pokeInfo?.sprites.other['official-artwork']["front_default"]} />
      <h1 className='pokemon_Details_Name'>{name}</h1>
      <section><h2 className='pokemon_Details_abilities_title'>Abilities</h2>

        <span className='pokemon_Details_abilities'>
          {pokeInfo?.abilities[0].ability.name}</span>
        <hr></hr>
        <span className='pokemon_Details_abilities2'>
          {pokeInfo?.abilities[1]?.ability.name}
        </span>

        <span
          className='pokemon_Details_abilities3'>{pokeInfo?.abilities[2]?.ability.name}
        </span>
        <hr></hr>
        <h2 className='pokemon_Details_title_Basexp'>Base XP</h2>
        <span className='pokemon_Details_Basexp'>{pokeInfo?.base_experience}</span><hr></hr>
        <h2 className='pokemon_Details_title_heigt'>Height</h2>
        <span className='pokemon_Details_height'>{pokeInfo?.height}</span><hr></hr>
      </section>

      <button className='pokemon_Details_btn' onClick={returnHome}>Go pokedeX</button>

    </article>

  )
}

export default PokemonDetails