import { Box } from '@mui/system';
import React from 'react';

type TProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const Layout = ({ header, children }: TProps) => {
  return (
    <>
      {header}
      <Box mt={8} sx={{ display: 'flex' }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
