import React from 'react';
import'./App.css';
import PlayerList from './Component/PlayerList';



function App() {
  return (
    <div className="App" style={{marginTop:'50px',}}>
      {/* calling for the players cards */}
      <PlayerList/>
    </div>
  );
}

export default App;
