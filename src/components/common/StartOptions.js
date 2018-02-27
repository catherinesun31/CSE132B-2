import React from 'react';
import { Link } from 'react-router';
import '../../styles/main-stylesheet.css';

/*class StartOptions extends React.Component {

  render() {
    return (
      <div className="options">
        <a href="pages/sign-in.html">Sign In</a>
        <a> or </a>
        <a href="pages/sign-up.html">Sign Up</a>
      </div>
    );
  }
}*/


function StartOptions(props) {
  return (
    <div className="options">
      <Link to="/login">Sign In</Link>
      <a> or </a>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default StartOptions;