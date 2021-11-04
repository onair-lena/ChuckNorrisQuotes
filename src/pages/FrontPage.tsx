import { makeStyles } from "@mui/styles";
import { Grid, Typography, useTheme } from "@mui/material";
import CategoriesList from "../components/CategoriesList";
import RandomJoke from "../components/RandomJoke";
import SearchJoke from "../components/SearchJokes";

const useStyles = makeStyles(() => ({
  image: {
    height: "30vh",
    width: "auto",
    "&:hover": {
      animation: "$shake 0.5s",
      animatedItemExiting: "infinite",
    },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
    "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
    "90% ": { transform: "translate(1px, 2px) rotate(0deg)" },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
  },
  "@keyframes shake": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
    " 10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
    " 20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
    "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
    "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
  },
}));

const FrontPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid container width="100%" my={2}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <img
            className={classes.image}
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt="Chuck Noris is watching you"
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography
            component="a"
            target="_blank"
            variant="h4"
            href="chucknorris.io"
          >
            Chuck Norris Quotes
          </Typography>
        </Grid>
      </Grid>

      <Grid container width="100%" my={2}>
        <Grid item xs={12} my={theme.spacing(2)}>
          <RandomJoke />
        </Grid>
        <Grid item xs={12}>
          <CategoriesList />
        </Grid>
        <Grid item xs={12}>
          <SearchJoke />
        </Grid>
      </Grid>
    </>
  );
};

export default FrontPage;
