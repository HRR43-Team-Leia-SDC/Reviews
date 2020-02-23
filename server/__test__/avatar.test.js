/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import AvatarImg from '../client/components/avatar';

describe('<AvatarImg />', () => {
  it('should return null as a stateless component', () => {
    const wrapper = shallow(<AvatarImg />);
    expect(wrapper.instance()).toBe(null);
  });
});
