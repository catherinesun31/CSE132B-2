import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
import TextInput from '../common/TextInput';
import CheckBoxInput from '../common/CheckBoxInput';
import Header from '../common/Header';
import '../../styles/account-stylesheet.css';


class SignUp extends React.Component {

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

    this.createAccountObject = this.createAccountObject.bind(this);
    this.signUp = this.signUp.bind(this);
    this.checkSignUpValues = this.checkSignUpValues.bind(this);
    this.verifyUniqueAccount = this.verifyUniqueAccount.bind(this);
    this.getUser = this.getUser.bind(this);
    this.setApt = this.setApt.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setfName = this.setfName.bind(this);
    this.setlName = this.setlName.bind(this);
    this.setLeasingRep = this.setLeasingRep.bind(this);
  }

  componentDidMount () {
    this.populateApts();
  }

  /**
   * Populates apartments you can sign into
   */
  populateApts () {

    let apts = document.getElementById("apts");

    let apartments = this.props.apts;
  
    if (apts != null) {
      apartments.forEach(function(apartment) {
           let option = document.createElement("option");
           option.value = apartment;
           apts.appendChild(option);
      });
    }
  }

  /**
   * Function used upon pushing sign in button
   */
  signUp() {

    let aptInput = this.state.apt;
    let fNameInput = this.state.fName;
    let lNameInput = this.state.lName;
    let userNameInput = this.state.userName;
    let emailInput = this.state.email;
    let passwordInput = this.state.password;
    let leasingRepInput = this.state.leasingRep;

    let signUpValues = [userNameInput, fNameInput, lNameInput,
              emailInput, passwordInput];

    if (!this.checkSignUpValues (aptInput, signUpValues)) {
      return;
    }

    if (!this.verifyUniqueAccount (userNameInput)) {
      return;
    }

    let newAccount = this.createAccountObject(aptInput, signUpValues, leasingRepInput);

    this.props.actions.createAccount(newAccount)
      .then(() => this.props.actions.signInAccount(newAccount)
        .then(() => {
          if (newAccount.isLeasingRep) {

            browserHistory.push("app-turnin-apv");
          
          } else {
      
            browserHistory.push("group");
          }
        })
        .catch(error => {
          alert("sign in user failed");
        })
      .catch(error => alert("create account failed")));

    /*if (leasingRepInput) {

      browserHistory.push("app-turnin-apv");
    
    } else {

      browserHistory.push("group");
    }*/
    
  }

  /**
   * Checks of input values are correct
   */
  checkSignUpValues (aptInput, signInValues) {

    if (!this.props.apts.includes(aptInput)) {
      alert ("Please select an existing apartment complex");
      return false;
    }

    for (let i = 0; i < signInValues.length; i++) {

        if (signInValues[i] == "") {
          alert ("Please fill out all values");
          return false;
        }
    }

    return true;
  }

  /**
   * Checks if the user is in the system
   */
  verifyUniqueAccount (userNameInput) {

    let user = this.getUser(userNameInput);

    if (user != null) {
      alert ("Username already exists");
      return false;
    } 

    return true;
  }

  /**
   * Gets specific user from data storage
   */
  getUser (userNameInput) {

    let userData = this.props.accounts;

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].userName == userNameInput) {
        return userData[i];
      }
    }

    return null;
  }

  createAccountObject (aptInput, signInValues, leasingRepInput) {

    let newUser = {
      userName: signInValues[0],
      apt: aptInput,
      fName: signInValues[1],
      lName: signInValues[2],
      email: signInValues[3],
      password: signInValues[4],
      isLeasingRep: leasingRepInput
    };

    return newUser;
  }

  setApt (event) {
    event.persist();
    this.setState((prevState) => {
      return {apt: event.target.value};
    });
  }

  setUserName (event) {
    event.persist();
    this.setState((prevState) => {
      return {userName: event.target.value};
    });
  }

  setPassword (event) {
    event.persist();
    this.setState((prevState) => {
      return {password: event.target.value};
    });
  }

  setfName (event) {
    event.persist();
    this.setState((prevState) => {
      return {fName: event.target.value};
    });
  }

  setlName (event) {
    event.persist();
    this.setState((prevState) => {
      return {lName: event.target.value};
    });
  }

  setEmail (event) {
    event.persist();
    this.setState((prevState) => {
      return {email: event.target.value};
    });
  }

  setLeasingRep (isLeasingRep) {
    this.setState((prevState) => {
      return {leasingRep: isLeasingRep};
    });
  }

  render() {

    return (

      <div>
        <Header />
        <div className="box-holder">
          <div className="long-box-container">
            <div className="box-header">
              <h3>Create Account</h3>
            </div>
            <div className="box-body">
              <form className="input-form">
              <div className="input-title">Apartment Complex:</div>
              <TextInput
                  list="apts"
                  type="text"
                  name="Apartment Complex:"
                  value={this.state.apt}
                  onChange={this.setApt} />
                <datalist id="apts">
                </datalist>
                <div className="input-title">First Name:</div>
                <TextInput
                  name="fname"
                  type="text"
                  value={this.state.fName}
                  onChange={this.setfName} />
                <div className="input-title">Last Name:</div>
                <TextInput
                  name="lname"
                  type="text"
                  value={this.state.lName}
                  onChange={this.setlName} />
                <div className="input-title">Username:</div>
                <TextInput
                  name="userid"
                  type="text"
                  value={this.state.userName}
                  onChange={this.setUserName} />
                <div className="input-title">Email:</div>
                <TextInput
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.setEmail} />
                <div className="input-title">Password:</div>
                <TextInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.setPassword} />
                <CheckBoxInput
                  label="Leasing Representative"
                  handleCheckboxChange = {this.setLeasingRep}
                  />
                <br/>
                <input type="button" onClick={this.signUp} value="Create Account" name="submit" className="button"/>
              </form>
            </div>
          </div>  
        </div>
      </div>
      
    );
  }
}


SignUp.propTypes = {
  apts: PropTypes.array.isRequired,
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    apts: state.apts,
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
