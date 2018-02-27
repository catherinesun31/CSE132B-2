import React from 'react';
import { Link } from 'react-router';
import ProfileOptions from './ProfileOptions';
import StartOptions from './StartOptions';
import '../../styles/main-stylesheet.css';
import profile from '../../img/profile.png';

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;

    let options = null;
    if (isLoggedIn) {
      options = <ProfileOptions />;
    } else {
      options = <StartOptions />;
    }

    return (
      <div>
        {options}
      </div>
    );
  }
}


export default LoginControl;
