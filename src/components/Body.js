import React from 'react'
import Card from './Card'

const Body = ({isLoading,pokemon,next,prev,setUrl,setOtherPage}) => {
  return (
    <div className='Body'>
        <div className="card-conteiner">
            {
                isLoading?(<p>is loading</p>):pokemon.map((e)=>{
                    return  <Card key={e.name} pokeName={e.name} url={e.url}/>
                })
            }
        </div>
        <div className="button-conteiner">
            {
                prev&&(<button onClick={()=>{setOtherPage(false);
                    setUrl(prev);
                    setTimeout(()=>{
                        setOtherPage(true)
                    },1000)}}>previous</button>)
            }
             {
                next&&(<button onClick={()=>{
                    setOtherPage(false);
                    setUrl(next);
                    setTimeout(()=>{
                        setOtherPage(true)
                    },1000)
                }}>
                    next
                </button>)
                  
            }
        </div>
    </div>
  )
}

export default Body