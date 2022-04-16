import { Toolbar, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyingLogo from './CurrencyingLogo';
import MobileDrawer from './MobileDrawer';

const DisplayMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <Toolbar>
      <IconButton
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>
      <CurrencyingLogo />
      <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </Toolbar>
  );
};

export default DisplayMobile;
