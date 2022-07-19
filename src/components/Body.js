import React from 'react'
import Card from './Card'

const Body = ({isLoading,pokemon,next,prev,setUrl}) => {
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
                prev&&(<button onClick={()=>{setUrl(`${prev}`)}}>previous</button>)
            }
             {
                next&&(<button onClick={()=>{setUrl(`${next}`)}}>next</button>)
            }
        </div>
    </div>
  )
}

export default Body