import { Box, Grid } from '@mui/material';
import CommonRates from './subcomponents/CommonRates';
import RatesTable from './subcomponents/RatesTable';

const Rates = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CommonRates />
        </Grid>
        <Grid item xs={12} md={6}>
          <RatesTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rates;
