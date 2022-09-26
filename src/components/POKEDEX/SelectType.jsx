import axios from 'axios'
import React, { useEffect } from 'react'
import { useSyncExternalStore } from 'react'
import { useState } from 'react'

const SelectType = ({setOptionType,setPokeSearch}) => {

   const [listTypes, setListTypes] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type`
        axios.get(URL)
            .then(res => setListTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

const handleChange =  e =>{
  setOptionType(e.target.value)
  setPokeSearch('')
}
    return (

        <select onChange={handleChange}>
            <option value="All">Allpokemons </option>
            {
                listTypes?.map(type => (<option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType