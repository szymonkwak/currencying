import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';
import routes from './routes';
import Header from './components/header/Header2';
import Pulpit from './components/pulpit/Pulpit';
import Calculator from './components/calculator/Calculator';
import Exchange from './components/exchange/Exchange';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.pulpit} element={<Pulpit />} />
          <Route path={routes.calc} element={<Calculator />} />
          <Route path={routes.exchange} element={<Exchange />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
