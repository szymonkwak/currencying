import { Box } from '@mui/material';
import CommonRates from './components/CommonRates/CommonRates';
import RatesTable from './components/RatesTable';

const Rates = () => {
  return (
    <Box sx={{ m: 2 }}>
      <CommonRates />
      <RatesTable />
    </Box>
  );
};

export default Rates;
