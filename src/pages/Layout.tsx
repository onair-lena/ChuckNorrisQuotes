import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type TProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ header, children, footer }: TProps) => {
  return (
    <Box>
      {header}
      <Box mt={8} sx={{ display: 'flex', height: 'calc(100vh - 128px)' }}>
        {children}
      </Box>
      {footer}
    </Box>
  );
};

export default Layout;
