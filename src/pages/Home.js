import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import GridCreator from "../components/GridCreator";
import IngredientHeader from "../components/IngredientHeader";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));
export class Home extends Component {
  render() {
    return (
      <div>
        <IngredientHeader></IngredientHeader>
        <GridCreator></GridCreator>;
      </div>
    )
  }
}

export default Home;
