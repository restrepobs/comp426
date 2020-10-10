import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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
        <Paper className={classes.paper}>Dairy</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Vegetables</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Fruits</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Baking and Grains</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Added Sweeteners</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Spices</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Meats</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Fish</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Seafood</Paper>
      </Grid>
    </Grid>
  );
}
