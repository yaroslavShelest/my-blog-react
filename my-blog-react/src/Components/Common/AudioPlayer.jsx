import React, { useState, useEffect } from "react";
import ReactHowler from 'react-howler';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
  },
}));

export default function AudioPlayer(props) {
  const classes = useStyles();

  let [playStatus, setPlayStatus] = useState(false);

  const activatePlayStatus = () => {
    setPlayStatus(true);
  };
  const deactivatePlayStatus = () => {
    setPlayStatus(false);
  };

  return (
    <React.Fragment>
      <Paper>
        <Grid container justify="center" align="center" direction="row">
          <Grid item>
          <ReactHowler
            src={['spring.mp3']}
            playing={playStatus}
          />
          </Grid>
          <Grid item>
            {playStatus ? (
              <Button onClick={deactivatePlayStatus} variant="contained" color="secondary">
                Off 
              </Button>
            ) : (
              <Button onClick={activatePlayStatus} variant="contained" color="primary">
                On 
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
