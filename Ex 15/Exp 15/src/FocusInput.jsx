import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null); 

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>useRef Input Focus</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Click the button to focus me"
                style={{ padding: '10px', width: '250px' }}
            />
            <br /><br />
            <button onClick={handleFocus}>Focus the Input</button>
        </div>
    );
};

export default FocusInput;
