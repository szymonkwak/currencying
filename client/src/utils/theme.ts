import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#424242',
    },
    primary: {
      main: '#8C9EFF',
    },
    secondary: {
      main: '#ffc400',
    },
  },
  shape: {
    borderRadius: 0,
  }
});
