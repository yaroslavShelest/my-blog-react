import React, { useState, useEffect } from "react";
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
    flexGrow: 1
  },
  margin: {
    display: "inline-block",
    margin: theme.spacing(1),
    width: "200px"
  }
}));

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

export default function ProgressBarWithHooks(props) {
  const classes = useStyles();

  let www = [
    { skill: "HTML", stage: 60 },
    { skill: "CSS", stage: 70 },
    { skill: "JS", stage: 80 },
    { skill: "React", stage: 90 },
    { skill: "Redux", stage: 80 }
  ];

  [value, changeValue] = useState( www );

  const activateChangeValue = e => {
    let timerId1 = setInterval(() => {
      changeValue({ ...www.map((value) => 
        value.stage =+5
        ) });
    }, 1000);
    let timerId2 = setInterval(() => {
      changeValue({ ...www.map((value) => 
        value.stage =-2
        ) });
    }, 1500);
     
    if(value[index].stage > 93) {
      clearInterval(timerId1);
      clearInterval(timerId2);
     }
  };


  return (
    <Grid container direction="column" spacing={5} className={classes.mainGrid}>
      <Container  onBlur={activateChangeValue}>
        <Grid container direction="column">
          <Grid item>
            <Box my={1}>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={www[0].stage}
              />{" "}
              asdasd
            </Box>
          </Grid>
          <Grid item>
            <Box my={1}>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={www[1].stage}
              />{" "}
              SSs
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
