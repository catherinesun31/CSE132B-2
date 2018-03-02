import React from 'react';
import { Link } from 'react-router';
import '../../styles/main-stylesheet.css';
import profile from '../../img/profile.png';

class ProfileOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      apt: '',
      userName: '',
      password: '',
      email: '',
      fName: '',
      lName: '',
      leasingRep: false 
    };

    this.onClick = this.onClick.bind(this);

  }

  onClick () {
    let modal = document.getElementById('myModal');

    modal.style.display = "block";
  }

  render() {
    return (
      <img src={profile} onClick={this.onClick} id="myProfile" alt="Image not shown" className="profile"></img>
    );
  }
}
/*
function ProfileOptions(props) {
  return (
    <div> 
      <img src={profile} id="myProfile" alt="Image not shown" className="profile"></img>
    </div>
    
  );
}*/

export default ProfileOptions;