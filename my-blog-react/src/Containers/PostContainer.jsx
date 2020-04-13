import React from "react";
import Post from "./../Components/Post/Post";
import { connect } from "react-redux";

class PostContainer extends React.Component {
  
  render() {
    return <Post {...this.props} />;
  }
}

export default connect(null, {})(PostContainer);