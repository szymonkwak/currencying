import { Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import CurrencyingLogo from './CurrencyingLogo';
import { headerButtons } from '../headerButtons';

const DisplayDesktop = () => {
  const getMenuButtons = () => {
    return headerButtons.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: Link,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <Toolbar sx={{ mp: 3, py: 1, backgroundColor: '#BBBBBB' }}>
      <CurrencyingLogo />
      {getMenuButtons()}
    </Toolbar>
  );
};

export default DisplayDesktop;
