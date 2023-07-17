import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { URL_RANDOM } from '../utils/api';
import { ChuckNorrisResponse } from '../utils/response_type';

const RandomJoke = () => {
  const [randomQuote, setRandomQuote] = useState<string>('');

  const getJoke = () => {
    fetch(URL_RANDOM).then(async (response) => {
      const data: ChuckNorrisResponse = await response.json();
      setRandomQuote(data?.value);
    });
  };

  useEffect(() => {
    getJoke();
  }, []);

  const handleGetJoke = () => getJoke();

  return (
    <>
      <Typography align="center">{randomQuote}</Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <Button variant="contained" size="medium" onClick={handleGetJoke}>
          Get Joke
        </Button>
      </Box>
    </>
  );
};

export default RandomJoke;
