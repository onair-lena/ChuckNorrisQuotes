import { Box, MenuItem, TextField, Typography } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { URL_CATEGORIES, URL_CATEGORY_SEARCH } from "../utils/api";
import { ChuckNorrisResponse } from "../utils/response_type";

const CategoriesList = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [jokeByCategory, setJokeByCategory] = useState<ChuckNorrisResponse>({
    categories: "",
    value: "",
    id: "",
  });

  const getCategories = () => {
    fetch(URL_CATEGORIES).then(async (response) => {
      const data: string[] = await response.json();
      setCategories(data);
    });
  };

  const getJokeByCategory = (category: string) => {
    fetch(`${URL_CATEGORY_SEARCH}${category}`).then(async (response) => {
      const data: ChuckNorrisResponse = await response.json();
      setJokeByCategory(data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getJokeByCategory(event.target.value);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" my={2}>
        <TextField
          sx={{ width: "300px" }}
          id="categories"
          select
          label="Select category"
          value={jokeByCategory?.categories[0] || ""}
          onChange={handleChange}
        >
          {categories.map((option) => (
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
