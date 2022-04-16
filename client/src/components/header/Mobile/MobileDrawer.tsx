import { Dispatch, SetStateAction } from 'react';
import { Drawer, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { headerButtons } from '../headerButtons';

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
    </Drawer>
  );
};

export default MobileDrawer;
