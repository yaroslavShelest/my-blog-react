import React from "react";
import FewInfoAboutMe from "./../Components/MainPage/FewInfoAboutMe";
import { connect } from "react-redux";

class FewInfoAboutMeContainer extends React.Component {
  
  render() {
    return <FewInfoAboutMe {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  aboutMeFew: state.aboutMe.aboutMeFew,
  aboutMeDescription: state.aboutMe.aboutMeDescription,
  hasFindWork: state.aboutMe.hasFindWork,
});

export default connect(mapStateToProps, {})(FewInfoAboutMeContainer);