import React from "react";
import ReactHowler from "react-howler";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Player from "./Player";

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preload: false, // OPTIONAL
      loaded: false,
      playing: false,
      volume: 1.0,

      stations: this.props.stations.map(({ src }) => src), // TODO костыль
      currentSrcIndex: 0,
    };
  }

  handleSwapToNext = () => {
    if (this.state.stations.length > this.state.currentSrcIndex) {
      // TODO checking
      this.handleStop();
      const nextIndex = this.state.currentSrcIndex;
      console.log(
        "nextIndex",
        nextIndex,
        "this.state.currentSrcIndex",
        this.state.currentSrcIndex
      );
      this.setState({ currentSrcIndex: nextIndex + 1 });
      this.handleOnPlay();
    }
  };
  handleSwapToPrevius = () => {
    if (this.state.currentSrcIndex > 0) {
      // TODO checking
      this.handleStop();
      const previusIndex = this.state.currentSrcIndex;
      console.log(
        "previusIndex",
        previusIndex,
        "this.state.currentSrcIndex",
        this.state.currentSrcIndex
      );
      this.setState({ currentSrcIndex: previusIndex - 1 });
      this.handleOnPlay();
    }
  };

  handleToggle = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  handleOnEnd = () => {
    this.setState({
      playing: false,
    });
  };

  handleStop = () => {
    this.player.stop();
    this.setState({
      playing: false, // Need to update our local state so we don't immediately invoke autoplay
    });
  };

  handleOnLoaded = () => {
    this.setState({
      loaded: true,
    });
  };

  handleOnPlay = () => {
    this.setState({
      playing: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Paper>
          <ReactHowler
            src={this.state.stations[this.state.currentSrcIndex]}
            playing={this.state.playing}
            preload={this.state.preload}
            html5={true}
            volume={this.state.volume}
            onLoad={this.handleOnLoaded}
            onPlay={this.handleOnPlay}
            onEnd={this.handleOnEnd}
            ref={(ref) => (this.player = ref)}
          />
          <Grid container justify="center" align="center" direction="row">
            <Grid item>
              <Box my={5}>
                <Player
                  handleSwapToNext={this.handleSwapToNext}
                  handleSwapToPrevius={this.handleSwapToPrevius}
                  handleToggle={this.handleToggle}
                  playing={this.state.playing}
                  {...this.props}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}
