import { useEffect, useState } from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CommonRatesArray, getCommonRates } from '../../../../api/getCommonRates';
import Loader from '../../../Loader/Loader';
import CRate from './CRate';

const CommonRates = () => {
  const [loading, setLoading] = useState(true);
  const [commonRates, setCommonRates] = useState<CommonRatesArray>([]);
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const xsScreen = useMediaQuery('(max-width:700px)');

  useEffect(() => {
    getCommonRates().then((rates) => {
      setCommonRates(rates);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ p: mdScreen ? 1 : 3 }}>
      <Typography variant="h4">Common exchange rates:</Typography>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexWrap: mdScreen ? 'wrap' : 'nowrap',
            mx: mdScreen ? (xsScreen ? 0 : 12) : 0,
            justifyContent: 'space-around',
          }}
        >
          {commonRates.map((common) => (
            <CRate key={common.rate.currencyFromCode} common={common} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CommonRates;
