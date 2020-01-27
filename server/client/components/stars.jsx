import React from 'react';
import styled from 'styled-components';
const axios = require('axios');


const Star = styled.div`
  width: 500px;
  height: 500px;
`;

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: 0
    }
    this.handleRating = this.handleRating.bind(this);
  }
  // retrieve rating for rendering purposes
  componentDidMount() {
    axios.get('/reviews')
    .then((response) => {
      console.log(response.data)
      this.setState({
        starRating: response.data.rating
      })
    })
  };

  // render stars based on rating received
  handleRating(rating) {
    if (this.state.starRating === 0) {
      return '☆☆☆☆☆';
    } else if (this.state.starRating === 1) {
      return '★☆☆☆☆';
    } else if (this.state.starRating === 2) {
      return '★★☆☆☆';
    } else if (this.state.starRating === 3) {
      return '★★★☆☆';
    } else if (this.state.starRating === 4) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  }

  render() {
    return (
      <Star>
        <div>
          {this.handleRating(this.state.starRating)}
          </div>
        </Star>
    )
  }
}

export default Stars;