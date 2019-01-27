import React, { Component } from 'react';
import { storage, database } from '../firebase';
class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.restaurantRef = database.ref('/restaurants');
    this.handleSumit = this.handleSumit.bind(this);
  }
  handleSumit(e) {
    e.preventDefault();
    console.log('submitted');
    this.restaurantRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="new-restaurant-form">
        <form>
          <input
            value={name}
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input type="submit" onClick={this.handleSumit} />
        </form>
      </div>
    );
  }
}

export default NewRestaurant;
