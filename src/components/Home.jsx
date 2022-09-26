import React from 'react'
import PokedexBtn from './PokedexBtn'


const Home = () => {

  

  return (
    <section className='home'>

      <article className='home_img'>
      <img className='animation_img' src="https://poketouch.files.wordpress.com/2019/03/ash_pikachu_poke_ball_pokemon_the_series_sun_and_moon_gif.gif"></img>
      <PokedexBtn/>
      </article>


     
    </section>
  )
}

export default Home