import React,{useEffect,useState} from 'react'

function Card({name,pokeUrl}) {
  const [sprites,setSprites]=useState("");
  const [types,setTypes]=useState();
  const [loaded, setLoaded]=useState(false)

  const getCardInfo = async ()=>{
    const cardInfo= await fetch(pokeUrl);
    const response= await cardInfo.json();
    const sprite = await response.sprites.front_default;
    const type = await response.types;
    setSprites(sprite);
    setTypes(type);
    setLoaded(true)
  }
  
  useEffect(()=>{
    getCardInfo();
  },[])

    return ( 
      <div className='Card'> 
        <h2>{name}</h2>
       <img src={sprites} alt="" />
       <div className='types'>
          {
            loaded?types.map(type=>{
              return <div className='type' key={type.type.name} >{type.type.name}</div>
          }):<p>is loading</p>}
       </div>

      </div>
    )}

export default Card