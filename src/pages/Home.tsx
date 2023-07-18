import React from 'react';
import { Box, CardMedia, Grid, Typography } from '@mui/material';

import RandomJoke from '../components/RandomJoke';
import { keyframes } from '@mui/system';

const rotate = keyframes`
  0% { transform: rotateY(0deg); }
  90% { transform: rotateY(360deg); }
`;

export const Home = () => {
  return (
    <Box width={'100%'}>
      <Grid
        container
        width="100%"
        my={6}
        px={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} sm={4} md={4} display="flex" justifyContent="center">
          <CardMedia
            component="img"
            image="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt="Chuck Noris is watching you"
            sx={{
              maxHeight: '30vh',
              '&:hover': {
                animation: `${rotate} 1s ease`,
              },
            }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography variant="h4">Chuck Norris Quotes</Typography>
        </Grid>
      </Grid>

      <Grid container width="100%" my={2}>
        <Grid item xs={12} my={2}>
          <RandomJoke />
        </Grid>
      </Grid>
    </Box>
  );
};
