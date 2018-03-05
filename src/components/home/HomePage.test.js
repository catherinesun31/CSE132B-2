import React from 'react';
import {expect} from 'chai';
import { mount} from 'enzyme';

import HomePage from './HomePage';
import Header from '../common/Header';
import IntroHead from './IntroHead';
import HomeContent from './HomeContent';
import Footer from './Footer';


describe('Renders HomePage components', () => {
  it('contains an <Header/> component', function () {
    const wrapper = mount(<HomePage/>);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains an <IntroHead/> component', function () {
    const wrapper = mount(<HomePage/>);
    expect(wrapper.find(IntroHead)).to.have.length(1);
  });

  it('contains an <HomeContent/> component', function () {
    const wrapper = mount(<HomePage/>);
    expect(wrapper.find(HomeContent)).to.have.length(1);
  });

  it('contains an <Footer/> component', function () {
    const wrapper = mount(<HomePage/>);
    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
