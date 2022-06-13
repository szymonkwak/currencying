import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import routes from './routes';
import Header from './components/Header/Header';
import Exchange from './components/Exchange/Exchange';
import Landing from './components/Landing/Landing';
import Rates from './components/Rates/Rates';
import Construction from './components/Construction/Construction';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.root} element={<Landing />} />
          <Route path={routes.rates} element={<Rates />} />
          <Route path={routes.wallet} element={<Construction />} />
          <Route path={routes.signIn} element={<Construction />} />
          <Route path={routes.signUp} element={<Construction />} />
          <Route path={routes.exchange} element={<Exchange />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
