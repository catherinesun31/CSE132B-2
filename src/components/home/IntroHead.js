import React from 'react';
import {Link} from 'react-router';
import '../../styles/main-stylesheet.css';

class IntroHead extends React.Component {
  render() {
    return (
        <div className="intro-content">
            <div className="intro-head">
                <div className="introduction">
                    <h1>Welcome to Lease Ease</h1>
                    <h4>Putting the "ease" in lease</h4>  
                </div>  
            </div>
      </div>
    );
  }
}

export default IntroHead;
