import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { loginButtons } from '../headerButtons';
import ConstructionModal from '../../Construction/ConstructionModal';

const LoginButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ConstructionModal open={modalOpen} setOpen={setModalOpen} />
      <Box sx={{ mx: 2, justifySelf: 'flex-end' }}>
        <Button variant="outlined" sx={{ mx: 1 }} onClick={() => setModalOpen(true)}>
          {loginButtons.SignUp.label}
        </Button>
        <Button variant="contained" sx={{ mx: 1 }} onClick={() => setModalOpen(true)}>
          {loginButtons.SignIn.label}
        </Button>
      </Box>
    </>
  );
};

export default LoginButtons;
