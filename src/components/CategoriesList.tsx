import { Box, SelectChangeEvent, Typography } from '@mui/material';
import * as React from 'react';

import { URL_CATEGORIES, URL_CATEGORY_SEARCH } from '../utils/api';
import { ChuckNorrisResponse } from '../utils/response_type';
import { useFetchData } from '../utils/useFetchData';
import { useState } from 'react';
import { SelectField } from './SelectField';

const CategoriesList = () => {
  const [open, setOpen] = useState(false);
  const { data: categories, getData: getCategories } = useFetchData<string[]>();

  const { data: jokeByCategory, getData: getJokeByCategory } =
    useFetchData<ChuckNorrisResponse>();

  const handleChange = (event: SelectChangeEvent<string>) => {
    getJokeByCategory(`${URL_CATEGORY_SEARCH}${event.target.value}`);
  };

  const handleOpen = () => {
    if (!categories) {
      getCategories(URL_CATEGORIES);
    }
    setOpen(!open);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" my={2}>
        <SelectField
          open={open}
          handleOpen={handleOpen}
          handleChange={handleChange}
          options={categories || []}
          value={jokeByCategory?.categories[0] || ''}
        />
      </Box>
      <Typography align="center">{jokeByCategory?.value}</Typography>
    </>
  );
};
export default CategoriesList;
