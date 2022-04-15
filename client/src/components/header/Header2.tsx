import { AppBar } from '@mui/material';
import DisplayDesktop from './sub-components/DisplayDesktop';

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <DisplayDesktop />
      </AppBar>
    </header>
  );
};

export default Header;
