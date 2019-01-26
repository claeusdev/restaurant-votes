import React, { Component, PropTypes } from 'react';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return <section className="restaurants" />;
  }
}

Restaurants.propTypes = {
  user: PropTypes
};

export default Restaurants;
