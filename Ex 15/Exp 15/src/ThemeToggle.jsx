import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
    const { themeStyle, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={themeStyle}>
            <h1>Theme Toggle with useContext</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeToggle;
