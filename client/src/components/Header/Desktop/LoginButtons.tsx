import { Box, Button } from '@mui/material';
import { loginButtons } from '../headerButtons';

const LoginButtons = () => {
  return (
    <Box sx={{ mx: 2, justifySelf: 'flex-end' }}>
      <Button variant="outlined" sx={{ mx: 1 }}>
        {loginButtons.SignUp.label}
      </Button>
      <Button variant="contained" sx={{ mx: 1 }}>
        {loginButtons.SignIn.label}
      </Button>
    </Box>
  );
};

export default LoginButtons;
