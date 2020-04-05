import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import dart from "./../../Assets/otherPng/dart.png";



const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexWrap: "nowrap"
  },
  dartContainer: {
    position: "relative",
    width: "100%", /* for IE 6 */
  },
  dartMovedText: {
    width: "50%",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  dartText: {
    color: "white",
    font: `bold 34px/55px Helvetica, Sans-Serif`,
    letterSpacing: "-1px",
    background: "rgb(0, 0, 0)",
    padding: "10px",
  },
  dartSpacer: {
    padding	: "0 5px",
  },
  dartPhoto: {
    maxHeight: "560px",
    maxWidth: "1232px",
    width: "100%"
  }


}));

export default function WellcomeSection(props) {
  const classes = useStyles();

  return (<React.Fragment>
        <Box className={classes.dartContainer}>
          <img src={dart} alt={"404"} className={classes.dartPhoto} />
              <Typography variant="h1" className={classes.dartMovedText}>
	              <span className={classes.dartText}> Hello everyone and
		            <span className={classes.dartSpacer}></span>
		              <br/>
		            <span className={classes.dartSpacer}></span>
		            wellcome in star app!
	              </span>
          </Typography>
        </Box>
    </React.Fragment>
  );
}


