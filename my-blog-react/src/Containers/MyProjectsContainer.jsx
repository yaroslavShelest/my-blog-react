import React from "react";
import MyProjects from "./../Components/MainPage/MyProjects";
import { connect } from "react-redux";

class MyProjectsContainer extends React.Component {
  
  render() {
    return <MyProjects {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  projects: state.myProjects.projects,
});

export default connect(mapStateToProps, {})(MyProjectsContainer);