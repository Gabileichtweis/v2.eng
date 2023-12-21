import React from 'react';
import Navbar from './components/Navbar/Index';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
