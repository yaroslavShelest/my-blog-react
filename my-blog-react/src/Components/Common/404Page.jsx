import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import notFound from "./../../Assets/404.png";

const useStyles = makeStyles((theme) => ({
  notFoundImage: {
    // maxHeight: "560px",
    // maxWidth: "1232px",
    // width: "100%",
    height: "90vh",
  },
  sectionWithPosition: {
    position: "relative",
    transform: `translate(0px, -32px)`,
  }
}));

export default function NotFoundPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid container justify="center" align="center" className={classes.sectionWithPosition}>
          <Paper>
            <img src={notFound} alt={"404"} className={classes.notFoundImage} />
          </Paper>
        </Grid>
    </React.Fragment>
  );
}
