import { useEffect, useState } from 'react';
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
import { RatesResponse } from '../typings';
import { getRates } from '../getRates';
// import { getCommonRates } from '../getCommonRates';

const COMMON_CURRENCIES: Array<Currency> = [Currency.EUR, Currency.USD, Currency.GBP, Currency.CHF];

const CommonRates = () => {
  const [commonRates, setCommonRates] = useState<RatesResponse>([]);

    // useEffect(() => {
    //     getCommonRates();
    // }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Common exchange rates:</Typography>
      {/* <TableContainer>
        <Table sx={{ minWidth: 100 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Currency pair</TableCell>
              <TableCell align="right">Buy</TableCell>
              <TableCell align="right">Sell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commonRates.map((rate) => (
              <TableRow hover key={rate.currencyCode} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">
                  {rate.currencyCode} / {Currency.PLN} /\
                </TableCell>
                <TableCell align="right">{rate.info.rate}</TableCell>
                <TableCell align="right">{rate.info.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Paper>
  );
};

export default CommonRates;
