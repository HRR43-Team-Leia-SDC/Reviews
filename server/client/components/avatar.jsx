// This is your avatar image component
import React from 'react';
const axios = require('axios');

class AvatarImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    }

  }

  componentDidMount() {
    const id = window.location.search.slice(1);
    axios.get(`/${id}`)
      .then((response) => {
        this.setState({
          imageUrl: response.data.avatarImgUrl
        })
      })
  }

  render() {
    return (
      <div class="avatarImg">
        <img src={this.state.imageUrl}></img>
      </div>
    )
  }
}

export default AvatarImg