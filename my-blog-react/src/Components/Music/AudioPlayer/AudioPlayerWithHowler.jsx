import React from "react";
import ReactHowler from "react-howler";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PlayerPanel from "./PlayerPanel";
import StationsList from "./StationsList";
import HeadlineSection from "../../Common/HeadlineSection";

const styles = (theme) => ({
  rootMovedCont: { position: "relative", transform: `translate(0px, -130px)` },
});

class AudioPlayerWithHowler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preload: false, // OPTIONAL
      loaded: false,
      playing: false,
      mute: false,
      volume: 1.0,

      stations: this.props.stations,
      currentStation: {
        id: 1,
        name: "Studio 21",
        src: "https://icecast-studio21.cdnvideo.ru/S21cl_1p",
        logo: "s21.png",
      },
    };
  }

  onChangeVolume = (event, newValue) => {
    this.setState({ volume: newValue });
  };

  handleSwapToNextWithId = (event, id) => {
    if (this.state.stations.length > this.state.currentStation.id) {
      this.handleStop();
      const nextStation = this.state.stations.find(
        (station) => station.id === +id
      );
      this.setState({ currentStation: nextStation });
      this.handleOnPlay();
    }
  };
  handleSwapToNext = () => {
    if (this.state.stations.length > this.state.currentStation.id) {
      this.handleStop();
      const nextStation = this.state.stations.find(
        (station) => station.id === this.state.currentStation.id + 1
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

  handleMuteToggle = () => {
    this.setState({
      mute: !this.state.mute,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container direction="column" className={classes.rootMovedCont}>
          <Grid  item>
            <HeadlineSection headlineText="rest with music!" />
          </Grid>
          <Grid item >
            <ReactHowler
              src={this.state.currentStation.src}
              playing={this.state.playing}
              preload={this.state.preload}
              html5={true}
              volume={this.state.volume}
              mute={this.state.mute}
              onLoad={this.handleOnLoaded}
              onPlay={this.handleOnPlay}
              onEnd={this.handleOnEnd}
              ref={(ref) => (this.player = ref)}
            />
            <Grid
              container
              justify="center"
              align="center"
              direction="row"
              align="center"
            >
              <Grid item>
                <Box my={5}>
                  <PlayerPanel
                    handleSwapToNext={this.handleSwapToNext}
                    handleSwapToPrevius={this.handleSwapToPrevius}
                    handleToggle={this.handleToggle}
                    handleMuteToggle={this.handleMuteToggle}
                    playing={this.state.playing}
                    onChangeVolume={this.onChangeVolume}
                    {...this.state}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box my={5} ml={2}>
                  <StationsList
                    handleSwapToNextWithId={this.handleSwapToNextWithId}
                    {...this.state}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AudioPlayerWithHowler);
