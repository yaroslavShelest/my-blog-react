import React from "react";
import MainPage from "./../Components/MainPage/MainPage";
import { connect } from "react-redux";

class MainPageContainer extends React.Component {
  
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(null, {})(MainPageContainer);