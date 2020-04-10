import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import firebaseConfig from './lib/config';
import firebase from 'firebase';
import 'firebase/firebase-firestore';

if(firebase.apps.length ===0){
  firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
