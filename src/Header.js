import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

{
  /* Hero unit */
}
export const HeroUnit = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Contact the Dancing Goat Cafe
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Here you'll find a list of all of our locations in the US and abroad.
          Feel free to contact any one of our cafe's anytime!
        </Typography>
      </Container>
    </div>
  );
};
