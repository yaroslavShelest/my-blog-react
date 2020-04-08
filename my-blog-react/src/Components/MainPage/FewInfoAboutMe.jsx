import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import image from "./../../Assets/myFotos/Cool.jpg";
import backAboutMe from "./../../Assets/backgrounds/backAboutMe.png";


const useStyles = makeStyles(theme => ({
  paper: {
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  mainPhotoContainer: {
    margin: "12px",
    width: "200px",
    maxHeight: "200px",
    boxSizing: "border-box"
  },
  mainTextContainer: {
    margin: "12px"
    
  },
  mainPhoto: {
    borderRadius: "50%",
    width: "150px",
    height: "150px"
  },
  dartPhoto: {
    width: "100%",
    height: "100%"
  },
  hello: {
    textAlign: "center" ,
    margin: "10px 0",
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
                               -1.5px   -2px yellow;`
  },
  positionContainer: {
    position: "relative",
    width: "100%", /* for IE 6 */
  },
  sectionImage: {
    maxHeight: "1200px",
    width: "100%"
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
  textBlock:{
    color: "white"
  }
}));

export default function FewInfoAboutMe({ aboutMeFew, aboutMeDescription, hasFindWork}) {
  const classes = useStyles();

  return (
      <Slide direction="left" in={true}  >
        <section className={classes.paper} >
          <Box className={classes.positionContainer}>
            <img src={backAboutMe} alt={"404"} className={classes.sectionImage} />
            <Box className={classes.sectionMovedContent} >
          <Typography variant="h4" className={classes.hello}>{aboutMeFew}</Typography>
          <Divider />
          <Grid container direction="row" justify="center"  >
            <Grid item >
              <Box className={classes.mainPhotoContainer} >
                <div className="animation-target" >
                  <img src={image} alt={"404"} className={classes.mainPhoto} />
                </div>
              </Box>
            </Grid>
            <Grid item >
              <Box className={classes.mainTextContainer}>
                <Typography className={classes.textBlock} variant="h6">{aboutMeDescription}</Typography>
              </Box>
            </Grid>
          </Grid>
          </Box>
          </Box>
        </section>
      </Slide>
  );
}
