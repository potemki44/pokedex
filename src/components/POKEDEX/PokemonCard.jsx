import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'
const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleclick = () => navigate(`/pokedex/${pokemon.name}`)

    return (
        <article onClick={handleclick} className='card'>
            <header className={`card_header bg-${pokemon?.types[0].type.name}`}>
                <img className='pokeImgAtPokedex' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
                <h3 className='pokecard_name'>{pokemon?.name}</h3>
            </header>

            <section className='pokecard'>
         
                <ul >{
                    pokemon?.types.map(slot => (

                        <div className='pokecard_types' key={slot.type.url}>{slot.type.name}</div>
                    ))
                }
                </ul>

            </section>
            <footer>
                <ul>
                    {pokemon?.stats.map(stat => (<StatPokemon key={stat.stat.url}
                        infoStat={stat} />))}
                </ul>
            </footer>
        </article>
    )
}

export default PokemonCard