import React from 'react'
import Player from './Player'
import players from '../joueurs'



const PlayerList = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}> 
    
        {players.map((data,key) => (<Player {...data} key={key}/>) )}
        

        </div>
    
  )
}

export default PlayerList