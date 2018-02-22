import React from 'react';
import {Link} from 'react-router';
import '../../styles/main-stylesheet.css';

class HomeContent extends React.Component {
  render() {
    return (
        <div className="intro-content">
            <div className="intro-leasing">
            <h1>Features</h1>
            <div className="floating-box">
                <h3>Apartment Complexes</h3>
                <p>If you would like your apartment complex to be in this system, contact one of our representatives to integrate your workflow into our systems.</p>
            </div>
            <div className="floating-box">
                <h3>Renters</h3>
                <p>You can start the leasing process right away. Just create an account and choose the apartment complex you would like to start leasing at.</p>
            </div>
            <div className="floating-box">
                <h3>Communication</h3>
                <p>Whether you are a leasing representative or a renter, communication with the other party is made simple with our chat system. Both parties can ask questions and get answers quickly</p>
            </div>
            <div className="floating-box">
                <h3>Clear Steps</h3>
                <p>The confusing leasing process is made easy with our built in checklist. The steps to work towards signing the lease are clearly spelled out for both renters and leasing representatives.</p>
            </div>
            <div className="floating-box">
                <h3>Live Progress</h3>
                <p>As you complete the steps, the to do list will automatically updated. Both you and apartment mates can see the progress you are making towards signing the lease.</p>
            </div>   
            </div>
      </div>
    );
  }
}

export default HomeContent;
