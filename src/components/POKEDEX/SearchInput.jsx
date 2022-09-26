import React from 'react'

const SearchInput = ({setPokeSearch,setOptionType}) => {

const handleSubmit = e =>{
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType("All")
} 

  return (
  

<form className='form_pokedex' onSubmit={handleSubmit}>
<input  className='input_toSearchPok' id="searchText" type="text" />
<button className='btn_toSearchPok'>Search them all</button>
   </form>
  
 
  )
}

export default SearchInput