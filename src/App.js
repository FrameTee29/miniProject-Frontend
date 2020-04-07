import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBAd8DV8Ubhk_1It-N8U4pZVPUlnzeEXxk",
  authDomain: "miniprojectclient.firebaseapp.com",
  databaseURL: "https://miniprojectclient.firebaseio.com",
  projectId: "miniprojectclient",
  storageBucket: "miniprojectclient.appspot.com",
  messagingSenderId: "665443678463",
  appId: "1:665443678463:web:a2cadb4439ac6ccae134ca",
  measurementId: "G-Q0LLYV99YY"
};

// Instantiate a Firebase app.
firebase.initializeApp(firebaseConfig);
firebase.analytics();

uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google , Facebook , Etc as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  }
};

const App = () => {
  return (
    <div className="App">
      <h1>FirebaseUI-React</h1>
      <h1> with Firebase Authentication</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default App;
