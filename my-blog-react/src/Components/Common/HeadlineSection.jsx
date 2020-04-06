import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import devider from "./../../Assets/devidersForSections/sectionDevider.png";



const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexWrap: "nowrap"
  },
  dartContainer: {
    position: "relative",
    width: "100%", /* for IE 6 */
  },
  dartMovedText: {
    width: "80%",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  dartText: {
    color: "white",
    font: `bold 54px/75px StarWars, Sans-Serif`,
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
  dartSpacer: {
    padding	: "0 5px",
  },
  dartPhoto: {
    maxHeight: "300px",
    maxWidth: "1232px",
    width: "100%"
  }


}));

export default function HeadlineSection({headlineText}) {
  const classes = useStyles();

  return (<React.Fragment>
        <Box className={classes.dartContainer}>
          <img src={devider} alt={"404"} className={classes.dartPhoto} />
              <Typography variant="h1" className={classes.dartMovedText}>
	              <span className={classes.dartText}> 
               {headlineText}
	              </span>
          </Typography>
        </Box>
    </React.Fragment>
  );
}


