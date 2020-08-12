import React from 'react';
import Routes from './routes';
import ThemeProvider from './contexts/theme';
import UserProvider from './contexts/user';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
