import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';

import Header from './Header';



describe('Props are properly being passed', () => {
  it('should have prop loggedOn to be defined', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.props().loggedOn).to.be.defined;
  });


});
