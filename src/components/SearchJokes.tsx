import {
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState, useRef } from 'react';
import { URL_SEARCH_BY_WORD } from '../utils/api';
import { SearchByKeyWordResult } from '../utils/response_type';
import { useFetchData } from '../utils/useFetchData';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';

const SearchJoke = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchByKeyWordResult>({
    result: [],
  });

  const { getData: getDataOnSearch } = useFetchData<SearchByKeyWordResult>();

  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleDebounceSearch = (searchSymb: string) => {
    clearTimeout(timeout.current);

    if (!searchSymb.trim() || searchSymb.length < 3) {
      return;
    }
    timeout.current = setTimeout(async () => {
      const result = await getDataOnSearch(
        `${URL_SEARCH_BY_WORD}${searchSymb}`
      );

      setSearchResult(result);
    }, 600);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    handleDebounceSearch(event.target.value);
  };

  const handleDeleteClick = () => {
    setSearch('');
    setSearchResult({ result: [] });
  };

  return (
    <>
      <Grid display="flex" justifyContent="center" my={6}>
        <TextField
          sx={{ width: '300px' }}
          type="search"
          value={search}
          onChange={handleChange}
        />
      </Grid>

      <Grid display="flex" justifyContent="center" my={2}>
        <Button variant="contained" size="medium" onClick={handleDeleteClick}>
          Clear
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Box>
          {searchResult?.result?.slice(0, 5)?.map((item: any) => (
            <ListItem key={item?.id}>
              <ListItemAvatar>
                <FilterVintageOutlinedIcon />
              </ListItemAvatar>
              <ListItemText primary={item?.value} />
            </ListItem>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default SearchJoke;
