import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  textAlign: 'center',
}));

const Calculator = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Kalkulator</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
