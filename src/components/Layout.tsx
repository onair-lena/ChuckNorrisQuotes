import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { appContext } from '../utils/context';
import { AlertBar } from './AlertBar';

type TProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ header, children, footer }: TProps) => {
  const { error, setError } = useContext(appContext);

  const handleClose = () => setError('');

  return (
    <Box>
      {header}
      {error && <AlertBar text={error} handleClose={handleClose} />}
      <Box mt={8} sx={{ display: 'flex', height: 'calc(100vh - 128px)' }}>
        {children}
      </Box>
      {footer}
    </Box>
  );
};

export default Layout;
