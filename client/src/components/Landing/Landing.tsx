import './landing.css';
import { Box } from '@mui/material';
import { theme } from '../../theme/theme';
import card from '../../img/Card.svg';

const Landing = () => {
  return (
    <Box className="landing" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Box className='landing--content'>
        <img className="landing--card" src={card} alt="debit card" />
        <Box component="h1" className="landing--heading">
          Currency <br />
          <span className="landing--heading-tr">trading</span> <br />
          <span className="landing--heading-sm"> simulator</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
