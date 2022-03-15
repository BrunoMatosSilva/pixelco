import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Dashbaord from './pages/Dashboard';
import Signup from './pages/Signup';
import { HomeContainer } from './styles';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeContainer>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </HomeContainer>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

