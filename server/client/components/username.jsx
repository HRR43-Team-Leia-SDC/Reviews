import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// const axios = require('axios');

const NameAndDate = styled.div`
  display: flex;
`;
const Username = styled.u`
  grid-column-start: col-two;
  grid-row-start: row-one;
  order: one;
`;

const Date = styled.div`
  grid-column-start: col-two;
  grid-row-start: row-one;
  order: two;
  padding-left: 10px;
`;

const dateFormatter = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let newDate = '';
  const arrOfDates = date.split('-');
  arrOfDates[1] = months[arrOfDates[1] - 1];
  newDate += `${arrOfDates[1]} ${arrOfDates[2]}, ${arrOfDates[0]}`;
  return newDate;
};

const UsernameAndDate = ({ name, date }) => (
  <NameAndDate>
    <Username>
      {name.substring(0, 9)}
    </Username>
    <Date>
      {dateFormatter(date.slice(0, 10))}
    </Date>
  </NameAndDate>
);

UsernameAndDate.defaultProps = {
  name: 'Nicolas Cage',
  date: 'Feb 21, 1994',
};

UsernameAndDate.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

export { dateFormatter };
export default UsernameAndDate;
