import { Toolbar, Button, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type TProps = {
  navItems: {
    name: string;
    path: string;
    component: JSX.Element;
  }[];
};

export const Header = ({ navItems }: TProps) => {
  const navigate = useNavigate();

  return (
    <AppBar component="nav">
      <Toolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(({ name, path }) => (
            <Button
              key={name}
              sx={{ color: '#fff' }}
              onClick={() => navigate(path)}
            >
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
