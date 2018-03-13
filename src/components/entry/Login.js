import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';
import TextInput from '../common/TextInput';
import Header from '../common/Header';
import '../../styles/account-stylesheet.css';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      apt: '',
      userName: '',
      password: '',
      leasingRep: false
    };

    this.populateApts = this.populateApts.bind(this);
    this.signIn = this.signIn.bind(this);
    this.checkSignInValues = this.checkSignInValues.bind(this);
    this.verifyAccount = this.verifyAccount.bind(this);
    this.getUser = this.getUser.bind(this);
    this.setApt = this.setApt.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
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
    //alert(JSON.stringify(this.props.accounts[0]));
    //alert(JSON.stringify(this.props.accounts[0]));
    //alert(apartments);

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
  signIn () {
    let aptInput = this.state.apt;
    let userNameInput = this.state.userName;
    let passwordInput = this.state.password;
    let leasingRepInput = this.state.leasingRep;

    if (!this.checkSignInValues (aptInput, userNameInput, passwordInput)) {
      return;
    }

    if (!this.verifyAccount (userNameInput, passwordInput)) {
      return;
    }

    let user = this.getUser(userNameInput);

    this.props.actions.signInAccount(user)
      .then(() => {
        if (user.isLeasingRep) {

          browserHistory.push("app-turnin-apv");
        
        } else {
    
          browserHistory.push("group");
        }
      })
      .catch(error => {
        alert("failed");
      });

    /*if (user.isLeasingRep) {

      browserHistory.push("app-turnin-apv");
    
    } else {

      browserHistory.push("group");
    }*/
  }

  /**
   * Checks of input values are correct
   */
  checkSignInValues (aptInput, userNameInput, passwordInput) {

    if (aptInput == "" || !this.props.apts.includes(aptInput)) {
      alert ("Please select an existing apartment complex");
      return false;

    } else if (userNameInput == "") {
      alert ("Please type in your user name");
      return false;

    } else if (passwordInput == "") {
      alert ("Please type in password");
      return false;
    
    } else {

      return true;
    }
  }

  /**
   * Checks if the user is in the system
   */
  verifyAccount (userNameInput, passwordInput) {

    let user = this.getUser(userNameInput);

    if (user == null) {
      alert ("Username doesn't exist");
      return false;
    } 

    if (user.password != passwordInput) {
      alert ("Incorrect password");
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

  setApt (event) {
    //alert(JSON.stringify(this.props.accounts[0]));
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

  render() {
    return (
      <div> 
        <Header />
        <div className="box-holder">
          <div className="box-container">
            <div className="box-header">
              <h3>Account Sign In</h3>
            </div>
            <div className="box-body">
              <form className="input-form" action="/action_page.php">
                <div className="input-title">Apartment Complex:</div>
                <TextInput
                  list="apts"
                  type="text"
                  name="Apartment Complex:"
                  value={this.state.apt}
                  onChange={this.setApt} />
                <datalist id="apts">
                </datalist>
                <div className="input-title">Username:</div>
                <TextInput
                  name="userid"
                  type="text"
                  value={this.state.userName}
                  onChange={this.setUserName} />
                <div className="input-title">Password:</div>
                <TextInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.setPassword} />
                <div className="check-box">
                  <input type="checkbox" name="leasing-rep" value={this.state.leasingRep} id="leasing-rep-input"/>Leasing Representative
                </div>
                <br/>
                <input type="button" onClick={this.signIn} value="Sign In" name="sign-in" className="button"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}


Login.propTypes = {
  apts: PropTypes.array.isRequired,
  accounts: PropTypes.array.isRequired,
  login: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    apts: state.apts,
    accounts: state.accounts,
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

