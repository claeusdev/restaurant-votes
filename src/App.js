import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Lunch Rush</h1>
        </header>
      </div>
    );
  }
}

export default App;
