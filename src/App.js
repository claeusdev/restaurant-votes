import React, { Component } from 'react';
import './App.css';
import Auth from './Components/Auth';
import CurrentUser from './Components/CurrentUser';
import { auth } from './firebase';
import NewRestaurant from './Components/NewRestaurant';
import { database } from './firebase';
import Restaurants from './Components/Restaurants';
import map from 'lodash/map';
import pick from 'lodash/pick';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      users: {},
      restaurants: null
    };
    this.userRef = null;
    this.usersRef = null;
    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
      }

      this.restaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
        this.usersRef = database.ref('/users');
        this.userRef = this.usersRef.child(user.uid);

        this.userRef.once('value').then((snapshot) => {
          if (snapshot.val()) return;
          const userData = pick(user, ['displayName', 'photoURL', 'email']);
          this.userRef.set(userData);
        });

        this.usersRef.on('value', (snapshot) => {
          this.setState({ users: snapshot.val() });
        });
      });
    });
  }
  render() {
    const { user, restaurants, users } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Lunch Rush</h1>
        </header>
        {user && <CurrentUser user={user} />}
        {!user && <Auth />}
        <NewRestaurant />
        <hr />

        <Restaurants restaurants={restaurants} user={user} />
      </div>
    );
  }
}

export default App;
