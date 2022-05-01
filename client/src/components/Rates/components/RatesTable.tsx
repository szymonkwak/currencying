import { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
  Select,
  Box,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Paper,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Currency from '../../../currency';
import { Rate } from '../../../api/typings';
import { getRates } from '../../../api/getRates';
import Loader from '../../Loader/Loader';

const RatesTable = () => {
  const [loading, setLoading] = useState(true);
  const [ratesArray, setRatesArray] = useState<Rate[]>([]);
  const [selectedRate, setSelectedRate] = useState(Currency.PLN);
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const xsScreen = useMediaQuery('(max-width:500px)');

  useEffect(() => {
    getRates(selectedRate).then((response) => {
      setRatesArray(response);
      setLoading(false);
    });
  }, [selectedRate]);

  const handleSelectFromCurrency = (e: SelectChangeEvent<Currency>) => {
    setSelectedRate(e.target.value as Currency);
  };
  return (
    <>
      <Box sx={{ p: mdScreen ? 1 : 3 }}>
        <Typography variant="h4">Exchange rates list:</Typography>
        {loading ? (
          <Loader />
        ) : (
          <Paper elevation={5} sx={{ my: 2, mx: mdScreen ? 0 : 10, py: 3, px: xsScreen ? 0 : 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ ml: 2 }}>Display rates for:</Typography>
              <FormControl hiddenLabel variant="filled" sx={{ minWidth: 100 }}>
                <Select variant="filled" value={selectedRate} onChange={handleSelectFromCurrency}>
                  {ratesArray.map((rate) => (
                    <MenuItem key={rate.currencyToCode} value={rate.currencyToCode}>
                      {rate.currencyToCode}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TableContainer>
              <Table size={xsScreen ? 'small' : 'medium'} sx={{ minWidth: 100 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Code</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="right">Buy</TableCell>
                    <TableCell align="right">Sell</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ratesArray.map((rate) =>
                    rate.currencyToCode !== selectedRate ? (
                      <TableRow
                        hover
                        key={rate.currencyToCode}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">{rate.currencyToCode}</TableCell>
                        <TableCell align="left">{rate.currencyToName}</TableCell>
                        <TableCell align="right">{rate.buyRate}</TableCell>
                        <TableCell align="right">{rate.sellRate}</TableCell>
                      </TableRow>
                    ) : null
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default RatesTable;
