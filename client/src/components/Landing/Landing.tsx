import styles from './Landing.module.css';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme';
import routes from '../../routes';
import card from '../../img/Card.svg';

const Landing = () => {
  return (
    <Box className={styles.landing} sx={{ backgroundColor: theme.palette.background.paper }}>
      <Box className={styles.content}>
        <Box component="img" className={styles.card} src={card} alt="debit card" />
        <Box component="h1" className={styles.heading}>
          Currency <br />
          <span className={styles.trading}>trading</span> <br />
          <span className={styles.simulator}>simulator</span>
        </Box>
      </Box>
      <Box className={styles.buttonContainer}>
        <Link to={routes.rates} {...{ style: { textDecoration: 'none' } }}>
          <Button
            variant="contained"
            size="large"
            className={styles.button}
            sx={{ px: 4, backgroundColor: 'black', color: 'white' }}
          >
            Check rates
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Landing;
