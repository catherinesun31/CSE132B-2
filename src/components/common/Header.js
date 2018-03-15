import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import LoginControl from './LoginControl';
import '../../styles/main-stylesheet.css';
import mainLogo from'../../img/logo.png';
import LogoStyle from '../../styles/LogoStyle';
import NavStyle from '../../styles/NavStyle';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  
  render () {

    let loginControl = null;
    if (this.props.loggedOn) {
      loginControl = <LoginControl loggedOn/>;
    } else {
      loginControl = <LoginControl />;
    }

    return (
    
      /*<nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>*/
      <div className="nav" style={NavStyle.nav}>
        <img src={mainLogo} style={LogoStyle.nav}></img>
        
        <div className="title">
          <h2 id="aptTitle"></h2>
        </div>
  
        {loginControl}
      </div>
    );
  }
  
}

Header.propTypes = {
  loggedOn: PropTypes.bool
};

export default Header;
