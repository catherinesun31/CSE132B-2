import React from 'react';
import {Link} from 'react-router';
import '../../styles/main-stylesheet.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Privacy Notice</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Terms and Conditions</a></li>
            </ul>
            <div className="footer-copyright">
                <div className="container">
                © 2017 Copyright
                </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Footer;
