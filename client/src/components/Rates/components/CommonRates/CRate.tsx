import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Rate } from '../../../../api/typings';

type CRateProps = { common: { rate: Rate; icon: string } };

const CRate = ({ common }: CRateProps) => {
  return (
    <Paper sx={{ maxWidth: '250px', minWidth: '220px', p: 1, border: 0, boxShadow: 'none' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
        <Box component="img" src={common.icon} alt="logo" />
        <Typography variant="h6">{common.rate.currencyFromCode} / PLN</Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ m: 1, display: 'flex', justifyContent: 'space-between' }}>
        Buy <strong>{common.rate.buyRate}</strong>
      </Typography>

      <Typography variant="subtitle1" sx={{ m: 1, display: 'flex', justifyContent: 'space-between' }}>
        Sell <strong>{common.rate.sellRate}</strong>
      </Typography>
    </Paper>
  );
};

export default CRate;
