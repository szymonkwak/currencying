import { Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import CurrencyingLogo from './CurrencyingLogo';
import { headerButtons } from '../headerButtons';

const DisplayDesktop = () => {
  const getMenuButtons = () => {
    return headerButtons.map(({ label, href }) => {
      return (
        <Button
          sx={{ mx: 1 }}
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
    <Toolbar sx={{ py: 1 }}>
      <CurrencyingLogo />
      {getMenuButtons()}
    </Toolbar>
  );
};

export default DisplayDesktop;
