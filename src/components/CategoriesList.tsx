import { Box, MenuItem, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { URL_CATEGORIES, URL_CATEGORY_SEARCH } from '../utils/api';
import { ChuckNorrisResponse } from '../utils/response_type';
import { useFetchData } from '../utils/requests';

const CategoriesList = () => {
  const { data: categories, getData: getCategories } = useFetchData<string[]>();

  const { data: jokeByCategory, getData: getJokeByCategory } =
    useFetchData<ChuckNorrisResponse>();

  useEffect(() => {
    getCategories(URL_CATEGORIES);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getJokeByCategory(`${URL_CATEGORY_SEARCH}${event.target.value}`);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" my={2}>
        <TextField
          sx={{ width: '300px' }}
          id="categories"
          select
          label="Select category"
          value={jokeByCategory?.categories[0] || ''}
          onChange={handleChange}
        >
          {categories?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Typography align="center">{jokeByCategory?.value}</Typography>
    </>
  );
};
export default CategoriesList;
