import React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        backgroundColor: '#161616',
      }}
    >
      <ButtonGroup variant="outlined">
        <Button component={Link} to={routes.pulpit}>
          Pulpit
        </Button>
        <Button component={Link} to={routes.calc}>
          Kalkulator
        </Button>
        <Button component={Link} to={routes.exchange}>
          Wymiana
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Header;
