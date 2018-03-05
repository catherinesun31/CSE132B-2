import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import profile from '../../img/profile.png';
import options from '../../img/options.png';
import '../../styles/group-stylesheet.css';


class Group extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section content-section">
        <div className="header group-header">
          <h2>Apartment Group</h2>
          <img src={options} alt="Image not shown" className="gear" />
        </div>
        <div className="body">
          <ol>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} alt="Image not shown" className="profile-pic" />
                  <a>Andrew (You)</a>
                </div>
              </div>
            </li>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} alt="Image not shown" className="profile-pic" />
                  <a>Pete</a>
                </div>
              </div>
            </li>
            <li>
              <div className="member">
                <div className="member-info">
                  <img src={profile} className="profile-pic" />
                  <a>Vac</a>
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

export default Group;
