import './App.css';
import Body from './components/Body';
import Search from './components/Search';

import React,{useState,useEffect} from 'react';


function App() {
    const [otherPage,setOtherPage]=useState(true);
    const [search, setSearch] = useState("");
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    const [pokemon,setPokemon]= useState();
    const [isLoading,setIsLoading]=useState(true);
    const [previous,setPrevious]= useState();
    const [next,setNext]= useState();

    const searchUrl="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const firstUrl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";


    const data = async ()=>{
        search === "" ? otherPage && setUrl(firstUrl):setUrl(searchUrl)
        const fetchingData = await fetch(url);
        const response = await fetchingData.json();
        const pokemonFilter = await response.results.filter(e=>{
            return e.name.includes(search);
        });
        setPokemon(search !== "" ?pokemonFilter:response.results);
        response.next ? setNext( search === ""&& response.next):setNext(false);
        response.previous ? setPrevious( search === ""&&  response.previous):setPrevious(false);
        setIsLoading(false)
        console.log(next)
    }
    useEffect(()=>{
        data();   
    },[url,search])
  return (
      <div className='App'>
         <Search search={search} setSearch={setSearch} />
         <Body next={next} prev={previous} setUrl={setUrl} setOtherPage={setOtherPage} pokemon={pokemon} isLoading={isLoading} />
      </div>
  )
}

export default App;