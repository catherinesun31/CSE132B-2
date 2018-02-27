import React from 'react';
import {Link} from 'react-router';
import '../../styles/account-stylesheet.css';


class Login extends React.Component {
  render() {
    return (
      <div className="box-holder">
        <div className="box-container">
          <div className="box-header">
            <h3>Account Sign In</h3>
          </div>
          <div className="box-body">
            <form className="input-form" action="/action_page.php">
              <div className="input-title">Apartment Complex:</div>
              <input list="apts" name="apts" id="apt-input" className="input-box" required/>
              <datalist id="apts">
              </datalist>
              <div className="input-title">Username:</div>
              <input type="text" name="userid" id="user-name-input" className="input-box" required/>
              <div className="input-title">Password:</div>
              <input type="password" name="password" id="password-input" className="input-box" required/>
              <br/>
              <div className="check-box">
                <input type="checkbox" name="leasing-rep" value="leasing-rep" id="leasing-rep-input"/>Leasing Representative
              </div>
              <br/>
              <input type="button" onClick="signIn()" value="Sign In" name="sign-in" className="button"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
