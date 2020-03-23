import React from "react";
import UsefullLinks from "./../Components/UsefullLinks/UsefullLinks";
import { connect } from "react-redux";

class UsefullLinksContainer extends React.Component {
  
  render() {
    return <UsefullLinks {...this.props} />;
  }
}

export default connect(null, {})(UsefullLinksContainer);