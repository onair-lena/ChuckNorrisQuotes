import { Alert, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

type TProps = {
  text: string;
  handleClose: () => void;
};
export const AlertBar = ({ text, handleClose }: TProps) => {
  return (
    <Alert
      variant="filled"
      severity="error"
      sx={{ position: 'absolute', top: 70, mx: 2 }}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={handleClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {text}
    </Alert>
  );
};
