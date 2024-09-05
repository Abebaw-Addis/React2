import React, {useReducer} from "react";

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
    }
}

function UseReducerHook(){

    const [count, setCount] = useReducer(reducer, initialState);

    return(
        <div className="button-container">
            <h3>Count: {count}</h3>
            <button className="button" onClick={() => setCount('increment')}>+</button>
            <button className="button" onClick={() => setCount('decrement')}>-</button>
            <button className="button" onClick={() => setCount('reset')}>0</button>
        </div>
    );
}

export default UseReducerHook;