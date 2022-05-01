import { useEffect, useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { CommonRatesArray, getCommonRates } from '../../../../api/getCommonRates';
import CRate from './CRate';

const CommonRates = () => {
  const [commonRates, setCommonRates] = useState<CommonRatesArray>([]);

  useEffect(() => {
    // getCommonRates().then((rates) => setCommonRates(rates));
  }, [commonRates]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Common exchange rates:</Typography>
      <Box sx={{ mt: 2, display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {commonRates.map((common) => (
          <CRate key={common.rate.currencyFromCode} common={common} />
        ))}
      </Box>
    </Paper>
  );
};

export default CommonRates;
