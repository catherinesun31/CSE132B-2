import React from 'react';
import { Link } from 'react-router';
import '../../styles/main-stylesheet.css';
import profile from '../../img/profile.png';

/*class ProfileOptions extends React.Component {

  render() {
    return (
      <img src={profile} id="myProfile" alt="Image not shown" className="profile"></img>
    );
  }
}*/

function ProfileOptions(props) {
  return (
    <div> 
      <img src={profile} id="myProfile" alt="Image not shown" className="profile"></img>
    </div>
    
  );
}

export default ProfileOptions;