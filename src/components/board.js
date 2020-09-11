import React  from 'react';
import Square from './square';

function Board(props) {


  const renderSquare = (i) => {
        return (
          <Square
            value={props.squares[i]}
            onClicked={() => props.getClicked(i)}
          />
        );
      }
   
    return (
        
        <div className="board">
            <div className="squareBox">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="squareBox">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="squareBox">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        </div>
    );
}
export default Board;

