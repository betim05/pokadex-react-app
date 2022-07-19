import React from 'react'

const Search = ({search,setSearch}) => { 
  return (
    <div className='Search'>
        <input type="Search" value={search} onChange={(e)=>{
            setSearch(e.target.value.toLowerCase());
          }} 
        placeholder='Search' className='input' />
    </div>
  )
}

export default Search