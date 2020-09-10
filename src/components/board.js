import React, { useState }  from 'react';
import Square from './square';

function Board(props) {

    const [ items, setitems ] = useState(Array(9).fill(null));
    const [ xIsNext, setxIsNext ] = useState(true);  


    const getClicked = (i) => {
        const boxes = items.slice();
        if(winnerDeclaration(items) || boxes[i]){
            return;
        }
        boxes[i] = xIsNext ?  'X' : 'O';
        setitems(boxes);
        xIsNext ? setxIsNext(false) : setxIsNext(true);
        //   or
        //   setxIsNext(!xIsNext);
      };

    function winnerDeclaration(items){
        const list = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
       for(let i=0; i<list.length; i++){
           const [a, b, c] = list[i];
           if(items[a] && items[a] === items[b] && items[a] === items[c]){
               return items[a];
           }   
       }
       return null
    }

    const winner = winnerDeclaration(items);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    } else {
        status = (xIsNext ? 'First player: X' : 'Second player: 0') 
    }

    
    
    const returnSquare = (i) => {
        return(
            <Square value={items[i]} onClicked={() => getClicked(i)}/>
        )
    }
    
   
   
    return (
        <>
        <div className="board">
            <div className="squareBox">
            {returnSquare(0)}
            {returnSquare(1)}
            {returnSquare(2)}
            </div>
            <div className="squareBox">
            {returnSquare(3)}
            {returnSquare(4)}
            {returnSquare(5)}
            </div>
            <div className="squareBox">
            {returnSquare(6)}
            {returnSquare(7)}
            {returnSquare(8)}
            </div>
        </div>
        <div className="status"><b>{status}</b></div>
        </>
    );
}
export default Board;

