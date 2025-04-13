import React from 'react';
import './StyledButton3.css';

const StyledButton3 = ({ label, onClick }) => {
    return (
        <button className="styled-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default StyledButton3;
