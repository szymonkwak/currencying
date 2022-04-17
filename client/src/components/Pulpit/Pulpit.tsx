import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Rates from '../Rates/Rates';
// import { useTContext } from '../../context/UserContext';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  // textAlign: 'center',
}));

const Pulpit = () => {
  // const { user } = useTContext()
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            Saldo portfela:
            {/* <Typography variant="h4">{user.plnBalance} PLN</Typography> */}
            <Typography variant="h4">100 000 PLN</Typography>
            <Typography variant="h4"> 1 980 USD</Typography>
            <Typography variant="h4"> 9 070 EUR</Typography>
            <Typography variant="h4"> 2 980 CHF</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Rates />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pulpit;
