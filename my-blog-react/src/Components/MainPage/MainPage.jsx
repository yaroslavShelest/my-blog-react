import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  root: {
    flexGrow: 1,
  },
  margin: {
    display: "inline-block",
    margin: theme.spacing(1),
    width: "200px"
  },
}));

// const ColorLinearProgress = withStyles({
//   colorPrimary: {
//     backgroundColor: "#b2dfdb"
//   },
//   barColorPrimary: {
//     backgroundColor: "#00695c"
//   }
// })(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

export default function MySkills(props) {
  const classes = useStyles();


  
  
  

  return (
    <Grid container direction="column" spacing={5} className={classes.mainGrid}>
      <Grid item>
        <Container>
          <Grid container direction="column">
            <Grid item>
              <Box my={1}>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={50}
                /> asdasd
              </Box>
            </Grid>
            <Grid item>
              <Box my={1}>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={30}
                /> SSs
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid item>
        <p>MyStoryContainer will be here soon </p>{" "}
      </Grid>
      <Grid item>
        <p>MyProjectsContainer will be here soon </p>{" "}
      </Grid>
      <Grid item>
        <p>SmallArticlesContainer will be here soon </p>{" "}
      </Grid>

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
