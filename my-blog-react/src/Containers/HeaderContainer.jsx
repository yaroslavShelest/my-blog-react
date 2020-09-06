import React from "react";
import Header from "./../Components/Header/Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  sections: state.menuSection.sections,
  animatedText: state.menuSection.animatedText,
});


export default connect(mapStateToProps, {})(HeaderContainer);