import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Counter with useReducer</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>
                Decrease
            </button>
        </div>
    );
};

export default CounterReducer;
