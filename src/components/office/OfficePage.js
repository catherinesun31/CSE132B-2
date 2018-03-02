import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import TodoList from '../common/TodoList';
import ProfileModal from '../common/ProfileModal';


class OfficePage extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="office" />
        <ProfileModal />
      </div>
    );
  }
}

export default OfficePage;
