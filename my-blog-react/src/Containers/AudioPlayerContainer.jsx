import React from "react";
import AudioPlayerWithHowler from "./../Components/Common/AudioPlayer/AudioPlayerWithHowler";
import { connect } from "react-redux";

class AudioPlayerContainer extends React.Component {
  
  render() {
    return <AudioPlayerWithHowler {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  stations: state.myRadio.stations,                               
});

export default connect(mapStateToProps, {})(AudioPlayerContainer);