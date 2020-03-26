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
import image from "./../../assets/myFotos/Cool.jpg";



const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 1200,
    margin: `${theme.spacing(1)}px auto`,
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
  hello: {
    textAlign: "center" ,
    margin: "10px 0"
  },
  gridContainer: {
    flexWrap: "nowrap"
  },
}));

export default function FewInfoAboutMe({ aboutMeFew, aboutMeDescription, hasFindWork}) {
  const classes = useStyles();

  return (
    <Slide direction="dawn" in={true} mountOnEnter unmountOnExit>
      <Paper className={classes.paper} >
      <Typography variant="h4" className={classes.hello}>{aboutMeFew}</Typography>
      <Divider />
        <Grid container direction="row" className={classes.gridContainer}  >
          <Grid item >
            <Box className={classes.mainPhotoContainer} >
              <div className="animation-target" >
            <img src={image} className={classes.mainPhoto} />
            </div>
            </Box>
          </Grid>
          <Grid item >
            <Box className={classes.mainTextContainer}>
            <Typography variant="h6">{aboutMeDescription}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
   </Slide>
  );
}
