import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCounterSlice } from '../store/slices/counter.Slice'

const PokedexBtn = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {

    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    if (inputValue.length != 0) {
      dispatch(setCounterSlice(inputValue))
      navigate("/pokedex")
    }

    e.target.name.value = ""
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input className='input_home' id="name" tyoe="text" />
        <button className='btn_home'>Enter to get'em all</button>
        <p className='home_text'>Hi trainer!, to start give me your name</p>

      </form></div>
  )
}

export default PokedexBtn