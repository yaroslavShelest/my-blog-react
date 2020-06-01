import React from "react";
import Contacts from "./../Components/Contacts/Contacts";
import { connect } from "react-redux";

class ContactsContainer extends React.Component {
  
  render() {
    return <Contacts {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  myContactsLinks: state.Contacts.myContactsLinks,
  myTeachers: state.Contacts.myTeachers,
});

export default connect(mapStateToProps, {})(ContactsContainer);