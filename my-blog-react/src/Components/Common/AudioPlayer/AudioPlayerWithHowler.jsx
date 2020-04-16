import React from "react";
import ReactHowler from "react-howler";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PlayerPanel from "./PlayerPanel";

export default class AudioPlayerWithHowler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preload: false, // OPTIONAL
      loaded: false,
      playing: false,
      volume: 1.0,  // TODO

      stations: this.props.stations,
      currentStation: {
        id: 1,
        name: "Studio 21",
        src: "https://icecast-studio21.cdnvideo.ru/S21cl_1p",
        logo: "s21.png",
      },
    };
  }

  onChangeVolume = (e) => {  // TODO
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleSwapToNext = () => {
    if (this.state.stations.length > this.state.currentStation.id) {
      this.handleStop();
      const nextStation = this.state.stations.find(
        (station) => station.id === this.state.currentStation.id + 1
      );
      console.log(
        "nextStation СТАЛО",
        nextStation,
        "this.state.currentStation БЫЛО",
        this.state.currentStation
      );
      this.setState({ currentStation: nextStation });
      this.handleOnPlay();
    }
  };

  handleSwapToPrevius = () => {
    if (this.state.currentStation.id > 1) {
      this.handleStop();
      const previusStation = this.state.stations.find(
        (station) => station.id === this.state.currentStation.id - 1
      );
      console.log(
        "previusStation СТАЛО",
        previusStation,
        "this.state.currentStation БЫЛО",
        this.state.currentStation
      );
      this.setState({ currentStation: previusStation });
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
            src={this.state.currentStation.src}
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
                <PlayerPanel
                  handleSwapToNext={this.handleSwapToNext}
                  handleSwapToPrevius={this.handleSwapToPrevius}
                  handleToggle={this.handleToggle}
                  playing={this.state.playing}
                  onChangeVolume={this.onChangeVolume}
                  {...this.state}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}
