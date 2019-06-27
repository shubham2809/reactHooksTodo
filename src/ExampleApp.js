import React, { useContext, useReducer } from 'react';
import { UserContext } from './Exampleindex';

const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        case 'reset':
            return {
                ...initialState
            };

        default:
            return initialState;
    }
}

export default function App() {
    const value = useContext(UserContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count : {state.count}
            <button
                type="button"
                className="border m-10 p-1"
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </button>
            <button
                type="button"
                className="border m-10 p-1"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>
            <button
                type="button"
                className="border m-10 p-1"
                onClick={() => dispatch({ type: 'reset' })}
            >
                Reset
            </button>
        </div>
    );
}
