import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import routes from './routes';
import Header from './components/Header/Header';
import Pulpit from './components/pulpit/Pulpit';
import Calculator from './components/calculator/Calculator';
import Exchange from './components/exchange/Exchange';
import Landing from './components/landing/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.root} element={<Landing />} />
          <Route path={routes.pulpit} element={<Pulpit />} />
          <Route path={routes.calc} element={<Calculator />} />
          <Route path={routes.exchange} element={<Exchange />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
