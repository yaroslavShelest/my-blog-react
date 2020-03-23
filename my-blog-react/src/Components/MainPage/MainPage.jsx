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
    <Grid container direction="column" spacing={5} className={classes.mainGrid}>

   <Grid item > <p>ProgressBarContainer will be here soon </p> </Grid>
   <Grid item > <p>MyStoryContainer will be here soon </p> </Grid>
   <Grid item > <p>MyProjectsContainer will be here soon </p> </Grid>
   <Grid item > <p>SmallArticlesContainer will be here soon </p> </Grid>


      {/* <ProgressBarContainer /> */}
      {/* <MyStoryContainer /> */}  
      {/* <MyProjectsContainer /> */}
      {/* <SmallArticlesContainer /> */}
    </Grid>
  );
}

// {[...new Array(30)]
//   .map(
//     () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.,`
//   )
//   .join('\n')}
