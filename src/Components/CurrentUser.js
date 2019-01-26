import React, { PropTypes } from 'react';
import { auth } from '../firebase';

const CurrentUser = ({ user }) => {
  return <div className="currentUser" />;
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};
