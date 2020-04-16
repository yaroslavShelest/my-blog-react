import React from "react";
import AudioPlayer from "./../Components/Common/AudioPlayer";
import { connect } from "react-redux";

class AudioPlayerContainer extends React.Component {
  
  render() {
    return <AudioPlayer {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  stations: state.myRadio.stations,                 
});

export default connect(mapStateToProps, {})(AudioPlayerContainer);