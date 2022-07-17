import React, { useEffect, useState } from 'react'

const Card = ({pokeName,url}) => {
    const [img,setImg] = useState('');
    const [types,setTypes] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [stats,setStats] = useState();

    const data = async ()=>{
        const fetchingData = await fetch(url);
        const res = await fetchingData.json();
        const img = await res.sprites.front_default;
        const type = await res.types;
        const stat = await res.stats;
        setStats(stat);
        setTypes(type);
        setImg(img);
        setIsLoading(false);
    } 
    useEffect(()=>{
        data()
    },[])
    return ( 
        <div className='Card'>
            <div className='first-page'>
                <h3>{pokeName}</h3>
                <img src={`${img}`} alt="pokemon" />

                <div className='types'>Type: 
                    {
                        isLoading?(<p>is loading</p>):types.map(e=>{
                            return <div className='type' key={e.type.name}>{e.type.name}</div>
                        })
                    } 
                </div>
            </div>
            <div className='second-page'>
                <ul>
                    {
                        isLoading?(<p>is loading</p>):stats.map(e=>{
                            return <li key={e.stat.name}>{`${e.stat.name}: ${e.base_stat}`}</li>
                        })
                    }
                </ul>
            </div> 
        </div>
    )
}

export default Card