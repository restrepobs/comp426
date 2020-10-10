import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import GridCreator from "../components/GridCreator";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));
export class Home extends Component {
  render() {
    return <GridCreator></GridCreator>;
  }
}

export default Home;
