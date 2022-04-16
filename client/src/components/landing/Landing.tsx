import { Box } from '@mui/material';
import { theme } from '../../theme/theme';

const Landing = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Landing
    </Box>
  );
};

export default Landing;
