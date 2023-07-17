import { BottomNavigation, Box, Typography } from '@mui/material';

import React from 'react';

export const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <Typography variant="caption" color="initial" px={1}>
        Copyright ©2023.
      </Typography>
      <Typography
        px={1}
        variant="caption"
        component="a"
        target="_blank"
        href="http://chucknorris.io"
      >
        Chucknorris.io
      </Typography>
    </BottomNavigation>
  );
};
