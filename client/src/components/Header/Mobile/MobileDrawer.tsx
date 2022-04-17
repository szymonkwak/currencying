import { Dispatch, SetStateAction } from 'react';
import { Drawer, MenuItem, Box, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { headerButtons, loginButtons } from '../headerButtons';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import routes from '../../../routes';

interface props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDrawer = ({ open, setOpen }: props) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getDrawerButtons = () => {
    return headerButtons.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: Link,
            to: href,
            style: { textDecoration: 'none' },
            key: label,
            onClick: handleDrawerClose,
          }}
        >
          <MenuItem sx={{ pr: 10, color: 'black' }}>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <Drawer
      {...{
        anchor: 'left',
        open: open,
        onClose: handleDrawerClose,
      }}
    >
      <Box sx={{ my: 2 }}>{getDrawerButtons()}</Box>
      <Divider />
      <Link {...{ to: routes.signUp, style: { textDecoration: 'none' } }}>
        <Button sx={{ mt: 1, ml: 1, pr: 10 }} endIcon={<LoginRoundedIcon />}>
          {loginButtons.SignUp.label}
        </Button>
      </Link>
      <Link {...{ to: routes.signIn, style: { textDecoration: 'none' } }}>
        <Button sx={{ ml: 1, pr: 10 }} endIcon={<AccountCircleRoundedIcon />}>
          {loginButtons.SignIn.label}
        </Button>
      </Link>
    </Drawer>
  );
};

export default MobileDrawer;
