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
} from '@mui/material';
import Currency from '../../../currency';
import { Rate } from '../../../api/typings';
import { getRates } from '../../../api/getRates';

const RatesTable = () => {
  const [ratesArray, setRatesArray] = useState<Rate[]>([]);
  const [selectedRate, setSelectedRate] = useState(Currency.PLN);

  // useEffect(() => {
  //   getRates(selectedRate).then((response) => {
  //     setRatesArray(response);
  //   });
  // }, [selectedRate]);

  const handleSelectFromCurrency = (e: SelectChangeEvent<Currency>) => {
    setSelectedRate(e.target.value as Currency);
  };
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Exchange rates list:</Typography>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography>Display rates for:</Typography>
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
        <Table sx={{ minWidth: 100 }}>
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
                <TableRow hover key={rate.currencyToCode} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
  );
};

export default RatesTable;
