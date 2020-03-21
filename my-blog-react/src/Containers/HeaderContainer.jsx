import React from "react";
import Header from "./../Components/Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(null, {})(HeaderContainer);