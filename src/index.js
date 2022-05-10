import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { HomeContainer } from './styles';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster position="bottom-right" />
      <HomeContainer>
        <App />
      </HomeContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

