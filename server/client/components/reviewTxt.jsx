import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Text = styled.div`
  width: 500px;
  font-size: 16px;
  grid-column-start: col-two;
  grid-row-start: row-three;
  padding-top: 15px;
`;

const ReviewText = ({ text }) => (
  <Text>
    {text}
  </Text>
);


export default ReviewText;
