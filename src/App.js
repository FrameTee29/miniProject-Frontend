import React, { useState, useEffect } from 'react';
import './App.css';
import firebaseConfig from './lib/config'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Signin from './components/signin';



// Instantiate a Firebase app.
firebase.initializeApp(firebaseConfig);
firebase.analytics();


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
        <Signin/>
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
