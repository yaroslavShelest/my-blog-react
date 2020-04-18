import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";
import music from "./../../../Assets/music.gif";
import Volume from "./Volume";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background: "aliceblue",
    maxWidth: "400px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "258px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function PlayerPanel({
  handleToggle,
  playing,
  handleSwapToNext,
  handleSwapToPrevius,
  currentStation,
  volume,
  onChangeVolume,
  handleMuteToggle,
  mute
}) {
  const classes = useStyles();
  const theme = useTheme();
  const path = './logos/';

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Awesome 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {currentStation.name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton
            aria-label="previous"
            onClick={handleSwapToPrevius}
          >
            <SkipPreviousIcon />
          </IconButton>
          <IconButton
            aria-label="play/pause"
            onClick={handleToggle}
            color={playing ? "primary" : "secondary"}
          >
            {playing ? (
              <PauseIcon className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>
          <IconButton aria-label="next" onClick={handleSwapToNext}>
            <SkipNextIcon />
          </IconButton>
        </div>
        <div className={classes.controls}>
          <Volume volume={volume} mute={mute} onChangeVolume={onChangeVolume} handleMuteToggle={handleMuteToggle}/>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={path + currentStation.logo}
        title="Live from space album cover"
      />
    </Card>
  );
}
