import { Button, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import CurrencyingLogo from '../CurrencyingLogo';
import { headerButtons } from '../headerButtons';
import { theme } from '../../../theme/theme';
import LoginButtons from './LoginButtons';

const DisplayDesktop = () => {
  const getMenuButtons = () => {
    return headerButtons.map(({ label, href }) => {
      return (
          <Button
            sx={{ mx: 1, color: theme.palette.text.primary }}
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
    <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
      <CurrencyingLogo />
      {getMenuButtons()}
      <LoginButtons />
    </Toolbar>
  );
};

export default DisplayDesktop;
