import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import{DairyAccordion,VegetableAccordion,FruitAccordion,BakingAccordion,
  SweetenersAccordion,SpicesAccordion,MeatAccordion,
  FishAccordion,SoupAccordion} from "./Accordions";
import Checkbox from "@material-ui/core/Checkbox";

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
      <Grid item xs={12} md={4}>
        <DairyAccordion title="Dairy"></DairyAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <VegetableAccordion title="Vegetables"></VegetableAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <FruitAccordion title="Fruits"></FruitAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <BakingAccordion title="Baking and Grains"></BakingAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <SweetenersAccordion title="Added Sweeteners"></SweetenersAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <SpicesAccordion title="Spices"></SpicesAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <MeatAccordion title="Meats"></MeatAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <FishAccordion title="Fish"></FishAccordion>
      </Grid>
      <Grid item xs={12} md={4}>
      <SoupAccordion title="Soup"></SoupAccordion>
      </Grid>
    </Grid>
  );
}
