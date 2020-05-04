import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeadlineSection from "../Common/HeadlineSection";
import UsefullTypes from "./UsefullTypes";
import UsefullTable from "./UsefullTable";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function UsefullLinks(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} className={classes.mainGrid}>

    <Grid item > 
      <HeadlineSection headlineText={"usefull library"}/>
    </Grid>
   <Grid item  > 
      <UsefullTypes />
    </Grid>
   <Grid item >
     <UsefullTable {...props}/>
   </Grid>
   <Grid item > <p>Table will be here soon </p> </Grid>
    </Grid>
  );
}
