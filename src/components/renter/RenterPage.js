import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/main-stylesheet.css';
import '../../styles/chat-stylesheet.css';


class RenterPage extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />
      </div>
    );
  }
}

export default RenterPage;
