import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App.jsx';

const wrapper = shallow(<App></App>);

describe('Test 1', () => {
  it('Should pass', () => {
    expect(wrapper.find('button').text()).toEqual('Hello');
  });
});
