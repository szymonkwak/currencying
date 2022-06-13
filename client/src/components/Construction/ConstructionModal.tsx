import { Box, Modal } from '@mui/material';
import Construction from './Construction';

type ConstructionModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConstructionModal = ({ open, setOpen }: ConstructionModalProps) => {
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Construction />
      </Box>
    </Modal>
  );
};

export default ConstructionModal;
