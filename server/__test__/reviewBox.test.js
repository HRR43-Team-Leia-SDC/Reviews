/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import ReviewBox from '../client/components/reviewBox';

describe('<ReviewBox />', () => {
  it('should render', () => {
    const wrapper = shallow(<ReviewBox />);
    expect(wrapper.exists()).toBe(true);
  });
});
