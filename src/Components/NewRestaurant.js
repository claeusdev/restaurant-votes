import React, { Component } from 'react';

class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <div className="new-restaurant-form">
        <form>
          <input value={name} type="text" />
        </form>
      </div>
    );
  }
}

export default NewRestaurant;
