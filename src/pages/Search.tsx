import { Grid } from '@mui/material';
import SearchJoke from '../components/SearchJokes';

export const Search = () => {
  return (
    <Grid item xs={12} width={'100%'} justifyContent={'center'} my={4}>
      <SearchJoke />
    </Grid>
  );
};
