import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Restaurant from './Restaurant';
import { database } from '../firebase';
class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote(key) {
    const currentUser = this.props.user;
    database
      .ref('/restaurants')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .set(currentUser.displayName);
  }

  handleDownvote(key) {
    const currentUser = this.props.user;
    database
      .ref('/restaurants')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .remove();
  }

  render() {
    const { restaurants, user } = this.props;
    return (
      <section className="restaurants">
        {map(restaurants, (restaurant, key) => (
          <Restaurant
            key={key}
            {...restaurant}
            handleUpvote={() => this.handleUpvote(key)}
            handleDownvote={() => this.handleDownvote(key)}
            user={user}
            uid={key}
          />
        ))}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object
};

export default Restaurants;
