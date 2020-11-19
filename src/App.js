import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllCafes } from "./client";
import { HeroUnit } from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
  boldText: {
    fontWeight: "bold",
  },
  cardContentLeft: {
    textAlign: "left",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  /** Using state to handle the list of cafes from the API call */
  const [cafe, setCafes] = useState();

  /** Using the useEffect hook to help update the dom after
   * the API call has finished. I.e. the (list of Cafe's)
   * component still needs to do something after render
   * because it is still waiting for the response.
   */
  useEffect(() => {
    getAllCafes().then((cafes) => {
      console.log(cafes);
      let cafeListOutput = cafes.map((cafe) => (
        <Grid item key={cafe.system.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={cafe.photo.rawData.value[0].url}
              title=""
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {cafe.system.name}
              </Typography>
              <Typography paragraph="true">
                <span className={classes.boldText}>Address:</span>{" "}
                {cafe.street.value}, {cafe.city.value},{cafe.zip_code.value},{" "}
                {cafe.state.value}, {cafe.country.value}
                <Typography>
                  <span className={classes.boldText}>Phone:</span>{" "}
                  {cafe.phone.value}
                </Typography>
                <Typography>
                  <span className={classes.boldText}>Email:</span>{" "}
                  {cafe.email.value}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ));

      setCafes(cafeListOutput);
      console.log(cafeListOutput);
      return cafeListOutput;
    });
  }, []);

  return (
    <div className="App">
      <HeroUnit />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cafe}
        </Grid>
      </Container>
      {/* <div>{cafe}</div> */}
      <footer className={classes.footer}>
        Copyright © 2020 Dancing Goat. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
