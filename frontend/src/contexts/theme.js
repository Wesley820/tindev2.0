import React, { useState, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as Theme } from 'styled-components';
import { light, dark } from '../styles/themes';

const ThemeContext = createContext({});

const themesOption = {
  light,
  dark,
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initState);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  function initState() {
    const theme = localStorage.getItem('theme');
    return themesOption[theme] || light;
  }

  useEffect(() => {
    localStorage.setItem('theme', theme.title);
  }, [theme]);

  return (
    <Theme theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Theme>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
