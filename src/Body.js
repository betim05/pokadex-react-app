import React, {useState,useEffect} from 'react'
import Card from './Card'




function Body() {

    const [info,setInfo]= useState();
    const [loadin,setLoading]=useState(true);
    const [num,setNum] = useState(12);
    const data = async() => {
      
        const url =`https://pokeapi.co/api/v2/pokemon?limit=${num}`;
        const fetching = await fetch(url);
        const json = await fetching.json();
        const results = await json.results; 
        setInfo(info=>info=results);
    }

    useEffect(()=>{  
      setLoading(false);    
       data();
      setLoading(true);
    },[])
  
  return (
    <>
      <div className='Body'>
          {info?info.map((item)=>{
              return <Card name={item.name} key={item.name}  pokeUrl={item.url} />
            }): <p>is loading</p>
          }
      
    </div><button onClick={()=>{setNum(num+12);data();}}>more cards</button>
    </>     
  )
}

export default Body