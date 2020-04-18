import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function Volume({ volume, mute, onChangeVolume,handleMuteToggle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item onClick={handleMuteToggle}>
          { volume === 0 || mute ? <VolumeOffIcon color="secondary" /> : <VolumeUp color="primary" />}
        </Grid>
        <Grid item xs>
          <Slider min={0} max={1} step={.05} value={volume} onChange={onChangeVolume} />
        </Grid>
      </Grid>
    </div>
  );
}
