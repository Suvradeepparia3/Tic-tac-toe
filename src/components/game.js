import React, { useState } from 'react';
import Board from './board';
import { winnerDeclaration } from './Helper';

function Game(props) {
     
    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const [ stepNumber, setStepNumber ] = useState(0);
    const [ xIsNext, setXIsNext ] = useState(true); 
    const winner = winnerDeclaration(history[stepNumber]);


    const getClicked = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if( winner || squares[i]) return; 
        // select items
        squares[i] = xIsNext ?  'X' : 'O';
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        xIsNext ? setXIsNext(false) : setXIsNext(true);
        //   or
        //   setxIsNext(!xIsNext);
      }

      const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
      };


    const renderMoves = () => 
        history.map((_step, move) => { 
            const destination = move ? `Go to move ${move}` : "Go to Strat";
            return (
            <li key={move}>
                <button className="button" onClick={() => jumpTo(move)}>{destination}</button>
            </li> 
            );
        });
    

    
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    } else {
        status = (xIsNext ? 'First player: X' : 'Second player: 0') 
    }
  

    return (
        <>
         <div className="status"><b>{status}</b></div>
        <div>
            <Board squares={history[stepNumber]} getClicked={getClicked} />
        </div>
     
         <div className="history">{renderMoves()}</div>
       
       
       

         </>
    );
}

export default Game;