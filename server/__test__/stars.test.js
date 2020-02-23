import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../client/components/stars';



describe('<Stars />', () => {
  it('should have a styled component class of rating', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.find('.rating')).toBeDefined();
  });
  it('should return a default rating of 5 stars', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.find('.rating').get(0).props.children).toEqual('★★★★★');
  });
});
