import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function MySkills(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      {"Here will be something important"}
    </Grid>
  );
}
