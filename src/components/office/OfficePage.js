import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';


class OfficePage extends React.Component {
  render() {
    return (
      <div>
        <Header loggedOn/>
        o hullo
        <ProfileModal />
      </div>
    );
  }
}

export default OfficePage;
