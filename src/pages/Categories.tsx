import { Grid } from '@mui/material';
import CategoriesList from '../components/CategoriesList';

export const Categories = () => {
  return (
    <Grid item xs={12} width={'100%'} justifyContent={'center'} my={4}>
      <CategoriesList />
    </Grid>
  );
};
