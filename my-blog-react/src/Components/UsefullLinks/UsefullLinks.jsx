import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HeadlineSection from "../Common/HeadlineSection";
import UsefullTypes from "./UsefullTypes";
import UsefullTable from "./UsefullTable";


const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    position: "relative", transform: `translate(0px, -160px)` 
  },
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
      <Box  mt={4}>
        <UsefullTable {...props}/>
      </Box>
   </Grid>
    </Grid>
  );
}
