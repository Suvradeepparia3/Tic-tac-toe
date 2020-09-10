import React from 'react';
import Game from './components/game';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="header">
       <b>A Tic-tac-toe project with React Js.</b>
     </div>
     <Game />
    </div>
  );
}

export default App;
