import { Box, Paper, Typography } from '@mui/material';

const CRate = ({ rate }) => {
  return (
    <Paper sx={{ maxWidth: '250px', p: 1, border: 1, borderRadius: 0, boxShadow: 'none' }}>
      <Typography variant="h6">{rate} / PLN</Typography>

      <Typography variant="subtitle1" sx={{ m: 1, display: 'flex', justifyContent: 'space-between' }}>
        Buy <strong>120</strong>
      </Typography>

      <Typography variant="subtitle1" sx={{ m: 1, display: 'flex', justifyContent: 'space-between' }}>
        Sell <strong>130</strong>
      </Typography>
    </Paper>
  );
};

export default CRate;
