import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => setDark(!dark);

    const themeStyle = {
        backgroundColor: dark ? '#222' : '#eee',
        color: dark ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '30px',
        textAlign: 'center'
    };

    return (
        <ThemeContext.Provider value={{ themeStyle, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
