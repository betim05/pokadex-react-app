import React, {useState,useEffect} from 'react'
import Card from './Card'




function Body() {

    const [info,setInfo]= useState();

    const data = async() => {
        let num = 10;
        const fetching = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
        const json = await fetching.json();
        const results = await json.results; 
        setInfo(results);
    }

    useEffect(()=>{      
       data()
       console.log(info)
    },[])
  
  return (
    <div className='Body'>
      <Card/>
    </div>
  )
}

export default Body