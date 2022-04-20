import './landing.css';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme';
import routes from '../../routes';
import card from '../../img/Card.png';

const Landing = () => {
  return (
    <Box className="landing" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Box className="landing--content">
        <Box component="img" className="landing--card" src={card} alt="debit card" />
        <Box component="h1" className="landing--heading">
          Currency <br />
          <span className="landing--heading-tr">trading</span> <br />
          <span className="landing--heading-sm"> simulator</span>
        </Box>
      </Box>
      <Link to={routes.rates} {...{ style: { textDecoration: 'none' } }}>
        <Button
          variant="contained"
          size="large"
          className="landing--button"
          sx={{ px: 4, backgroundColor: 'black', color: 'white' }}
        >
          Check rates
        </Button>
      </Link>
    </Box>
  );
};

export default Landing;
