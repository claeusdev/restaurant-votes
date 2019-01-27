import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { storage, database } from '../firebase';
import FileInput from './Fileinput';

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.storageRef = storage.ref('images').child(props.uid);
    this.restaurantRef = database.ref('/restaurants').child(props.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const file = e.target.files[0];
    const uploadTask = this.storageRef
      .child(file.name)
      .put(file, { contentType: file.type });
    uploadTask
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then((url) => {
        this.restaurantRef.child('photoURL').set(url);
      });
  }
  render() {
    const {
      name,
      photoURL,
      votes,
      user,
      handleUpvote,
      handleDownvote
    } = this.props;
    const userSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="restaurant">
        <p>{name}</p>
        {photoURL && <img src={photoURL} alt={name} />}
        {!photoURL && ''}
        <ul>{votes && map(votes, (vote, key) => <li key={key}>{vote}</li>)}</ul>
        {userSelected ? (
          <button onClick={handleDownvote}>I'll pass</button>
        ) : (
          <button onClick={handleUpvote}>I'd go there</button>
        )}

        <FileInput
          accept=".png, .gif, .jpg"
          placeholder="Add an image to restauarant"
          onChange={this.handleSubmit}
        />
      </article>
    );
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
