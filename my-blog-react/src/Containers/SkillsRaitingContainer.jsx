import React from "react";
import SkillsRaiting from "./../Components/Common/SkillsRaiting";
import { connect } from "react-redux";

class SkillsRaitingContainer extends React.Component {
  
  render() {
    return <SkillsRaiting {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  skills: state.aboutMe.skills,
});

export default connect(mapStateToProps, {})(SkillsRaitingContainer);