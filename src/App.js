import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { render } from '@testing-library/react';

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

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google , Facebook , Etc as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  }
};


const App = () => {

  const [isSignedIn, setIsSignedIn] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => setIsSignedIn(!!user)
    );
  })
  if (!isSignedIn) {
    return (
      <div>
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  }


  return (
    <div className="App">
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL} />
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default App;
