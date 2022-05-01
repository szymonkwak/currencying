import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import RatesTable from '../Rates/components/RatesTable';
// import { useTContext } from '../../context/UserContext';

const Pulpit = () => {
  // const { user } = useTContext()
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            Saldo portfela:
            {/* <Typography variant="h4">{user.plnBalance} PLN</Typography> */}
            <Typography variant="h4">100 000 PLN</Typography>
            <Typography variant="h4"> 1 980 USD</Typography>
            <Typography variant="h4"> 9 070 EUR</Typography>
            <Typography variant="h4"> 2 980 CHF</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <RatesTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pulpit;
