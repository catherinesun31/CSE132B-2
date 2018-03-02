import React, {PropTypes} from 'react';
import '../../styles/main-stylesheet.css';
import {browserHistory} from 'react-router';

let userData = 
  {
    userName: "jcruz",
    apt: "Axiom La Jolla",
    fName: "Jonah",
    lName: "Cruz",
    email: "jcruz@example.com",
    password: "12345",
    isLeasingRep: false
  };

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isChecked: false 
    };

    this.logout = this.logout.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount () {
    this.populateProfile();
  }

  populateProfile () {

    let profileList = document.getElementById('profile-list');

    let array = [];

    array.push("Username: " + userData.userName);
    array.push("Apartment: " + userData.apt);
    array.push("First Name: " + userData.fName);
    array.push("Last Name: " + userData.lName);
    array.push("Email: " + userData.email);

    for(let i = 0; i < array.length; i++) {
      // Create the list item:
      let item = document.createElement('li');

      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));

      // Add it to the list:
      profileList.appendChild(item);
    }
  }

  logout () {

    browserHistory.push("");
  }

  close () {
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    let modal = document.getElementById('myModal');

    modal.style.display = "none";
  }

  render() {
    let label = this.props.label;
    let isChecked  = this.state.isChecked;

    return (
      <div id="myModal" className="modal">

        <div className="modal-content">
          <span onClick={this.close} className="close">&times;</span>
          <ul id="profile-list"></ul>
          <div className="button-container">
            <button id="logoutBtn" onClick={this.logout} className="modal-button">Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

ProfileModal.propTypes = {
  label: PropTypes.string.isRequired,
  getProfileInfo: PropTypes.func,
  logout: PropTypes.func
};

export default ProfileModal;