import React from 'react';

const StyledButton2 = ({ label, onClick }) => {
    return (
        <>
            <style>
                {`
            .internal-styled-button {
                background-color: #2196F3;
                color: white;
                padding: 12px 24px;
                font-size: 16px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                transition: background-color 0.3s;
            }

            .internal-styled-button:hover {
                background-color: #0b7dda;
            }
        `}
            </style>

            <button className="internal-styled-button" onClick={onClick}>
                {label}
            </button>
        </>
    );
};

export default StyledButton2;
