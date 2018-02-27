import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import LoginControl from './LoginControl';
import '../../styles/main-stylesheet.css';
import mainLogo from'../../img/logo.png';

const Header = ({loading}) => {
  return (
    /*<nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>*/
    <div className="nav">
      <img src={mainLogo} className="logo"></img>
      
      <div className="title">
        <h2 id="aptTitle"></h2>
      </div>

      <LoginControl />
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
