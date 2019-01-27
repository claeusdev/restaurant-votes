import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../firebase';

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      </div>
    );
  }
}

export default Auth;
