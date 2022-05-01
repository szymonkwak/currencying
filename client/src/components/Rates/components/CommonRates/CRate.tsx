import { Paper, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Rate } from '../../../../api/typings';

type CRateProps = { common: { rate: Rate; icon: string } };

const CRate = ({ common }: CRateProps) => {
  const mdScreen = useMediaQuery('(max-width:985px)');

  return (
    <Paper elevation={5} sx={{ m: 1, maxWidth: '240px', minWidth: '205px', flexGrow: 1, py: 1, px: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box component="img" src={common.icon} alt="logo" sx={{ width: mdScreen ? '60px' : '73px' }} />
        <Typography variant="h6">{common.rate.currencyFromCode} / PLN</Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ my: 1, mx: 3, display: 'flex', justifyContent: 'space-between' }}>
        Buy <strong>{common.rate.buyRate}</strong>
      </Typography>

      <Typography variant="subtitle1" sx={{ my: 1, mx: 3, display: 'flex', justifyContent: 'space-between' }}>
        Sell <strong>{common.rate.sellRate}</strong>
      </Typography>
    </Paper>
  );
};

export default CRate;
