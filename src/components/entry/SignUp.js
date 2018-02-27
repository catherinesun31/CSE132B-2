import React from 'react';
import {Link} from 'react-router';


class SignUp extends React.Component {
  render() {
    return (
      <div className="box-holder">
        <div className="long-box-container">
          <div className="box-header">
            <h3>Create Account</h3>
          </div>
          <div className="box-body">
            <form className="input-form">
            <div className="input-title">Apartment Complex:</div>
              <input list="apts" name="apts" className="input-box" id="apt-input" required/>
              <datalist id="apts">
              </datalist>
              <div className="input-title">First Name:</div>
              <input type="text" name="fname" className="input-box" id="fname-input" required/>
              <div className="input-title">Last Name:</div>
              <input type="text" name="lname" className="input-box" id="lname-input" required/>
              <div className="input-title">Username:</div>
              <input type="text" name="userid" className="input-box" id="user-name-input" required/>
              <div className="input-title">Email:</div>
              <input type="email" name="email" className="input-box" id="email-input" required/>
              <div className="input-title">Password:</div>
              <input type="password" name="password" className="input-box" id="password-input" required/>
              <br/>
              <div className="check-box">
                <input type="checkbox" name="leasing-rep" id="leasing-rep-input" value="leasing-rep"/>Leasing Representative
              </div>
              <br/>
              <input type="button" onClick="signUp()" value="Create Account" name="submit" className="button"/>
            </form>
          </div>
        </div>  
      </div>
    );
  }
}

export default SignUp;
