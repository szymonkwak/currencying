import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#212121',
      paper: '#BBBBBB',
    },
    primary: {
      main: '#8C9EFF',
    },
    secondary: {
      main: '#ffc400',
    },
  },
  shape: {
    borderRadius: 10,
  }
});
