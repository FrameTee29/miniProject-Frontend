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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
