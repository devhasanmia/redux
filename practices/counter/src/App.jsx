import React, { useReducer } from 'react'

const App = () => {
    const initialState = 22
    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + 1
        } else if (action.type === "DECREMENT") {
            return state - 1
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 className='font-bold'>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INcem</button>
        </div>
    )
}

export default App
