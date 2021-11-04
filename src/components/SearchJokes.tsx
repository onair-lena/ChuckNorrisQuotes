import {
  Avatar,
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useRef } from "react";
import { URL_SEARCH_BY_WORD } from "../utils/api";
import { SearchByKeyWordResult } from "../utils/response_type";

const SearchJoke = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchByKeyWordResult>({
    result: [],
  });

  const throttling = useRef<boolean>(false);

  const handleThrottlingSearch = (searchSymb: string) => {
    if (throttling.current) {
      return;
    }
    if (searchSymb.length < 3) {
      setSearchResult({ result: [] });
      return;
    }

    throttling.current = true;
    window.setTimeout(() => {
      throttling.current = false;
      fetch(`${URL_SEARCH_BY_WORD}${searchSymb}`)
        .then(async (response) => {
          if (!response.ok) {
            console.log("Something went wrong!");
          } else {
            const data: SearchByKeyWordResult = await response.json();
            setSearchResult(data);
            console.log(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, 800);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    handleThrottlingSearch(event.target.value);
  };

  const handleSearchClick = () => {
    setSearch("");
    setSearchResult({ result: [] });
  };
  return (
    <>
      <Grid display="flex" justifyContent="center" my={2}>
        <TextField
          label="Search field"
          type="search"
          value={search}
          onChange={handleChange}
        />
      </Grid>

      <Grid display="flex" justifyContent="center" my={2}>
        <Button variant="contained" size="medium" onClick={handleSearchClick}>
          Delete
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Box>
          {searchResult?.result?.slice(0, 5)?.map((item: any) => (
            <ListItem key={item?.id}>
              <ListItemAvatar>
                <Avatar alt="icon" src={item?.icon_url} />
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
