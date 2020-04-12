import React from "react";
import Box from "@material-ui/core/Box";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import devider from "./../../Assets/devidersForSections/sectionDevider.png";



const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexWrap: "nowrap"
  },
  headlineContainer: {
    position: "relative",
    width: "100%", /* for IE 6 */
  },
  headlineMovedText: {
    width: "80%",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  headlineText: {
    color: "white",
    font: `bold 54px/75px StarWars, Sans-Serif`,
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
  headlineTextForMobile: {
    color: "white",
    font: `bold 24px/45px StarWars, Sans-Serif`,
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
  deviderImage: {
    maxHeight: "300px",
    maxWidth: "1232px",
    width: "100%"
  }


}));

export default function HeadlineSection({headlineText}) {
  const classes = useStyles();
  const matchesMaxW600 = useMediaQuery('(max-width:600px)');

  return (<React.Fragment>
        <Box className={classes.headlineContainer}>
          <img src={devider} alt={"404"} className={classes.deviderImage} />
              <Typography variant="h1" className={classes.headlineMovedText}>
	              <span className={matchesMaxW600 ? classes.headlineTextForMobile : classes.headlineText}> 
               {headlineText}
	              </span>
          </Typography>
        </Box>
    </React.Fragment>
  );
}


