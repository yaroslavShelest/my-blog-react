import React from "react";
import AboutMe from "./../Components/AboutMe/AboutMe";
import { connect } from "react-redux";

class AboutMeContainer extends React.Component {
  
  render() {
    return <AboutMe {...this.props} />;
  }
}

export default connect(null, {})(AboutMeContainer);