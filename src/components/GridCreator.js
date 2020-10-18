import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Accordion from "./Accordion"
import Chevron from "./Chevron";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: grey,
  },
}));
export default function GridCreator() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={4}>
        <Accordion title="Dairy" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Vegetables" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Fruits" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Baking and Grains" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Added Sweeteners" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Spices" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Meats" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Fish" content="food"></Accordion>
      </Grid>
      <Grid item xs={4}>
      <Accordion title="Seafood" content="food"></Accordion>
      </Grid>
    </Grid>
  );
}
