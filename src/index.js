import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import Dashbaord from './pages/Dashboard';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { HomeContainer } from './styles';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toaster position="bottom-right" />
        <AuthContextProvider>
          <HomeContainer>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Dashboard" element={<Dashbaord />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </HomeContainer>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

