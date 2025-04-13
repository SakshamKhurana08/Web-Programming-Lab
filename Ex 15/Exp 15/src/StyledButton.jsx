import React from 'react';

const StyledButton = ({ label, onClick }) => {
    const buttonStyle = {
        backgroundColor: '#4CAF50', // green
        padding: '12px 24px',
        fontSize: '16px',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default StyledButton;
