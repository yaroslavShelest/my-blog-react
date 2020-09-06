import React from "react";
import UsefullLinks from "./../Components/UsefullLinks/UsefullLinks";
import { connect } from "react-redux";

class UsefullLinksContainer extends React.Component {
  
  render() {
    return <UsefullLinks {...this.props} />;
  }
}

const mapStateToProps = (state) =>({
  links: state.UsefullLinks.links
})

export default connect(mapStateToProps, {})(UsefullLinksContainer);