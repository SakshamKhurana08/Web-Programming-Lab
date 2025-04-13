import React from 'react';
import Child from './Child';

const Parent = () => {
    const msg = "Hello from the Parent component!";

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Parent Component</h1>
            <Child message={msg} />
        </div>
    );
};

export default Parent;
