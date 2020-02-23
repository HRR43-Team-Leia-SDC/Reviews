/* eslint-disable no-undef */
import { dateFormatter } from '../client/components/username';

describe('<username />', () => {
  it('should properly format the date', () => {
    expect(dateFormatter('2019-04-06')).toEqual('Apr 06, 2019');
    expect(dateFormatter('2016-02-01')).toEqual('Feb 01, 2016');
  });
});
