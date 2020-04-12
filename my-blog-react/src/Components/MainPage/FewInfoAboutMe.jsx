import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import image from "./../../Assets/myFotos/Cool.png";
import backAboutMe from "./../../Assets/backgrounds/backAboutMe.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    background: "inherit",
    boxShadow: "none",
  },
  mainPhotoContainer: {
    margin: "12px",
    width: "200px",
    maxHeight: "200px",
    boxSizing: "border-box",
  },
  mainTextContainer: {
    margin: "12px",
  },
  mainPhoto: {
    width: "100%",
    height: "150px",
  },
  dartPhoto: {
    width: "100%",
    height: "100%",
  },
  hello: {
    textAlign: "center",
    margin: "12px",
    textTransform: "uppercase",
    letterSpacing: "4px",
    color: "black",
    fontWeight: "bold",
    textShadow: `-2px   -2px yellow,
                                 -2px -1.5px yellow,
                                 -2px   -1px yellow,
                                 -2px -0.5px yellow,
                                 -2px    0px yellow,
                                 -2px  0.5px yellow,
                                 -2px    1px yellow,
                                 -2px  1.5px yellow,
                                 -2px    2px yellow,
                               -1.5px    2px yellow,
                                 -1px    2px yellow,
                               -0.5px    2px yellow,
                                  0px    2px yellow,
                                0.5px    2px yellow,
                                  1px    2px yellow,
                                1.5px    2px yellow,
                                  2px    2px yellow,
                                  2px  1.5px yellow,
                                  2px    1px yellow,
                                  2px  0.5px yellow,
                                  2px    0px yellow,
                                  2px -0.5px yellow,
                                  2px   -1px yellow,
                                  2px -1.5px yellow,
                                  2px   -2px yellow,
                                1.5px   -2px yellow,
                                  1px   -2px yellow,
                                0.5px   -2px yellow,
                                  0px   -2px yellow,
                               -0.5px   -2px yellow,
                                 -1px   -2px yellow,
                               -1.5px   -2px yellow;`,
  },
  positionContainer: {
    position: "relative",
    width: "100%" /* for IE 6 */,
  },
  sectionImage: {
    maxHeight: "1200px",
    width: "100%",
  },
  sectionMovedContent: {
    width: "50%",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  sectionText: {
    color: "white",
    font: `bold 2.25rem StarWars, Sans-Serif`,
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
  textBlock: {
    color: "white",
  },
  aboutMeDesc: {
    font: `bold 34px/55px Helvetica, Sans-Serif`,
    color: "white"
  }
}));

export default function FewInfoAboutMe({
  aboutMeFew,
  aboutMeDescription,
  hasFindWork,
}) {
  const classes = useStyles();
  const matchesMaxW600 = useMediaQuery('(max-width:600px)');


  return (
    <Slide direction="left" in={true}>
      <Paper className={classes.paper}>
        <Grid container direction="row-reverse" wrap={matchesMaxW600 ? {} : "nowrap"} style={{'justifyContent': 'center'}}>
          <Grid item xs={6}>
          <Box className={classes.mainPhotoContainer}>
              <img src={image} alt={"404"} className={classes.mainPhoto} />
          </Box>
          </Grid>
          <Grid item className={classes.gridContainer}>
            <Box >
              <Typography variant="h4" className={classes.hello}>
                {aboutMeFew}
              </Typography>
            </Box>
              <Box className={classes.mainTextContainer}>
                <Typography variant="h6" className={classes.aboutMeDesc}>{aboutMeDescription}</Typography>
              </Box>
          </Grid>
        </Grid>
      </Paper>
    </Slide>
  );
}
