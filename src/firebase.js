import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCh8BA7x2XnxvUj_99OIEbjPaBxE-XWYxY',
  authDomain: 'eat-out-c6c19.firebaseapp.com',
  databaseURL: 'https://eat-out-c6c19.firebaseio.com',
  projectId: 'eat-out-c6c19',
  storageBucket: 'eat-out-c6c19.appspot.com',
  messagingSenderId: '743743301569'
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
