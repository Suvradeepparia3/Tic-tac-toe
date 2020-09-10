import React from 'react';

function Square(props) {

    return (
        <div>
            <button onClick={() => props.onClicked()} className="border">
                    {props.value}
            </button>
            
        </div>
    );
}

export default Square;