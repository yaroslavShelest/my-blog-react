import React from "react";
import MySkills from "./../Components/MySkills";
import { connect } from "react-redux";

class MySkillsContainer extends React.Component {
  
  render() {
    return <MySkills {...this.props} />;
  }
}

export default connect(null, {})(MySkillsContainer);