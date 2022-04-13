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
} from '@mui/material';
import Currency from '../../currency';
import { getRates, RatesResponse } from './getRates';

const Rates = () => {
  const [ratesArray, setRatesArray] = useState<RatesResponse>([]);
  const [selectedRate, setSelectedRate] = useState(Currency.PLN);

  useEffect(() => {
    getRates(selectedRate).then((response) => {
      setRatesArray(response);
    });
  }, [selectedRate]);

  const handleSelectFromCurrency = (e: SelectChangeEvent<Currency>) => {
    setSelectedRate(e.target.value as Currency);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography>Wyświetl kursy dla:</Typography>
        <FormControl hiddenLabel variant="filled" sx={{ minWidth: 100 }}>
          <Select variant="filled" value={selectedRate} onChange={handleSelectFromCurrency}>
            {ratesArray.map((rate) => (
              <MenuItem key={rate.currencyCode} value={rate.currencyCode}>
                {rate.currencyCode}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Kupno</TableCell>
              <TableCell align="right">Sprzedaż</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ratesArray.map((rate) =>
              rate.currencyCode !== selectedRate ? (
                <TableRow hover key={rate.currencyCode} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{rate.currencyCode}</TableCell>
                  <TableCell align="right">{rate.info.rate}</TableCell>
                  <TableCell align="right">{rate.info.rate}</TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Rates;
