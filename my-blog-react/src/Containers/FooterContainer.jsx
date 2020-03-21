import React from "react";
import Footer from "./../Components/Footer";
import { connect } from "react-redux";

class FooterContainer extends React.Component {
  
  render() {
    return <Footer {...this.props} />;
  }
}

export default connect(null, {})(FooterContainer);