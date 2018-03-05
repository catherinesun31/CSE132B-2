import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import apt1 from '../../img/axiom-apt1.jpg';
import apt2 from '../../img/axiom-apt2.jpg';
import apt3 from '../../img/axiom-apt3.jpg';
import options from '../../img/options.png';
import '../../styles/apt-stylesheet.css';
import '../../styles/main-stylesheet.css';



class ChooseApt extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section content-section">
              <div className="header">
                  <h2>Axiom Apartments</h2>
              </div>
              <div className="body">
                  <ol className="apt-list">
                      <li>
                          <div className="member">
                              <img src={apt1} className="apt-pic"/>
                              <div className="apt-info">
                                  <div className="unit-header">
                                    <Link to="/apt">Sea Model Unit 2436</Link>
                                  </div>
                                  <a>Price: $2330</a>
                                  <a>2 Bed, 2 Bath</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="member">
                              <img src={apt2} className="apt-pic"/>
                              <div className="apt-info">
                                  <div className="unit-header">
                                    <Link to="/apt">Sea Model Unit 2455</Link>
  
                                  </div>
                                  <a>Price: $2400</a>
                                  <a>2 Bed, 2 Bath</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="member">
                              <img src={apt3} className="apt-pic"/>
                              <div className="apt-info">
                                  <div className="unit-header">
                                    <Link to="/apt">Sea Model Unit 2423</Link>
                                  </div>
                                  <a>Price: $2600</a>
                                  <a>3 Bed, 2 Bath</a>
                              </div>
                          </div>
                      </li>
                  </ol>
              </div>
            </div>
      </div>
      
    );
  }
}

export default ChooseApt;
