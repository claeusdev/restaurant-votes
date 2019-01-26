import React, { Component, PropTypes } from 'react';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return <article className="restaurant" />;
  }
}

Restaurant.propType = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.handleDeselect
};
export default Restaurant;
