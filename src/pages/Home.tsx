import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import RandomJoke from '../components/RandomJoke';

const useStyles = makeStyles(() => ({
  image: {
    height: '30vh',
    width: 'auto',
    '&:hover': {
      animation: '$rotate 1s ease',
    },
  },
  '@keyframes rotate': {
    '90%': { transform: 'rotateY(360deg)' },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box width={'100%'}>
      <Grid container width="100%" my={6}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <img
            className={classes.image}
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt="Chuck Noris is watching you"
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography variant="h4">Chuck Norris Quotes</Typography>
        </Grid>
      </Grid>

      <Grid container width="100%" my={2}>
        <Grid item xs={12} my={theme.spacing(2)}>
          <RandomJoke />
        </Grid>
      </Grid>
    </Box>
  );
};
