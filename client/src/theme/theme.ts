import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#212121',
      paper: '#CCCCCC',
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
  },
  typography: {
    fontFamily: ['Karla', 'sans-serif'].join(','),
  },
});
