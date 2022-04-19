import { Box, Button } from '@mui/material';
import { headerButtons } from '../headerButtons';
import { Link } from 'react-router-dom';
import { theme } from '../../../theme/theme';

const HeaderButtons = () => {
  const getMenuButtons = () => {
    return headerButtons.map(({ label, href }) => {
      return (
        <Button
          sx={{ mx: 1, color: theme.palette.text.primary }}
          {...{
            component: Link,
            to: href,
            key: label,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return <Box>{getMenuButtons()}</Box>;
};

export default HeaderButtons;
