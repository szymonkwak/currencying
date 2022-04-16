import { AppBar } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from '../../theme/theme';
import DisplayDesktop from './Desktop/DisplayDesktop';
import DisplayMobile from './Mobile/DisplayMobile';

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const isMoblieView = () => {
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
    };
    isMoblieView();
    window.addEventListener('resize', isMoblieView);
    return () => {
      window.removeEventListener('resize', isMoblieView);
    };
  }, [mobileView]);

  return (
    <header>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper }}>
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </AppBar>
    </header>
  );
};

export default Header;
