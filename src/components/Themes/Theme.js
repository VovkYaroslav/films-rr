import React, { useState, useEffect } from 'react';
import './style.module.css';

function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
            <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
        </button>
    );
}

export {ThemeSwitcher};