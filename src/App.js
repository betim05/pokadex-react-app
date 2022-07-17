import './App.css';
import Body from './components/Body';
import Search from './components/Search';

import React,{useState,useEffect} from 'react';


function App() {
    const [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon`);
    const [pokemon,setPokemon]= useState();
    const [isLoading,setIsLoading]=useState(true);
    const [previous,setPrevious]= useState();
    const [next,setNext]= useState();

    const data = async ()=>{
        const fetchingData = await fetch(url);
        const response = await fetchingData.json();
        setPokemon(response.results)
        setNext(response.next)
        setPrevious(response.previous)
        setIsLoading(false)
      
    }
    useEffect(()=>{
        data();

        
    },[url])
  return (
      <div className='App'>
         <Search />
         <Body next={next} prev={previous} setUrl={setUrl} pokemon={pokemon} isLoading={isLoading} />
      </div>
  )
}

export default App;