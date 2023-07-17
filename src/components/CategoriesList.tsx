import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { URL_CATEGORIES, URL_CATEGORY_SEARCH } from '../utils/api';
import { ChuckNorrisResponse } from '../utils/response_type';
import { useFetchData } from '../utils/requests';

const CategoriesList = () => {
  const [open, setOpen] = React.useState(false);
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
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="categories">Select category</InputLabel>
          <Select
            labelId="categories"
            id="categories"
            open={open}
            onClose={handleOpen}
            onOpen={handleOpen}
            value={jokeByCategory?.categories[0] || ''}
            label="Select category"
            onChange={handleChange}
          >
            {categories?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Typography align="center">{jokeByCategory?.value}</Typography>
    </>
  );
};
export default CategoriesList;
