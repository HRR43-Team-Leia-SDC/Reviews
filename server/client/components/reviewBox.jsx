/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AvatarImg from './avatar';
import Stars from './stars';
import ReviewText from './reviewTxt';
import UsernameAndDate from './username';
import ItemLink from './itemLink';

const Box = styled.div`
  width: 65%;
  height: 250px;
  display: grid;
  grid-template-columns: [col-one] 65px [col-two]200px ;
  grid-template-rows: [row-one] 25px [row-two] 20px [row-three] 100px [row-four] 25px;
  font-family: sans-serif;
  padding-left: 25px;
`;

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      item: '',
      itemImageUrl: '',
      text: '',
      starRating: 0,
      username: '',
      datePosted: '',
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.setState({
      imageUrl: id.avatarImgUrl,
      item: id.itemForSale,
      itemImageUrl: id.imageUrl,
      text: id.text,
      starRating: id.rating,
      username: id.username,
      datePosted: id.datePosted,
    });
  }

  render() {
    const {
      imageUrl,
      starRating,
      text,
      username,
      datePosted,
      item,
      itemImageUrl,
    } = this.state;
    return (
      <Box className="review">
        <AvatarImg image={imageUrl} />
        <UsernameAndDate name={username} date={datePosted} />
        <Stars stars={starRating} />
        <ReviewText text={text} />
        <ItemLink item={item} link={itemImageUrl} />
      </Box>
    );
  }
}

ReviewBox.defaultProps = {
  id: {},
};

ReviewBox.propTypes = {
  id: PropTypes.object,
};

export default ReviewBox;
