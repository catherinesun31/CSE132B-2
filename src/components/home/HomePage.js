import React from 'react';
import {Link} from 'react-router';
import IntroHead from './IntroHead';
import HomeContent from './HomeContent';
import Footer from './Footer';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <IntroHead/>
        <HomeContent/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
