/* eslint-disable no-else-return */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Star = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  grid-column-start: col-two;
  grid-row-start: row-two;
`;

const Stars = ({ stars }) => {
  // render stars based on rating received
  const handleRating = () => {
    if (stars === 0) {
      return '☆☆☆☆☆';
    } else if (stars === 1) {
      return '★☆☆☆☆';
    } else if (stars === 2) {
      return '★★☆☆☆';
    } else if (stars === 3) {
      return '★★★☆☆';
    } else if (stars === 4) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  };

  return (
    <Star className="rating">
      {handleRating(stars)}
    </Star>
  );
};

Stars.defaultProps = {
  stars: 5,
};

Stars.propTypes = {
  stars: PropTypes.number,
};

export default Stars;
