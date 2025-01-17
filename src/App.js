import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from './lib/uiConfig';
import firebaseConfig from './lib/config';
import Topbar from './components/topbar';
import './signin.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Home';
import Activity from './Activity';
import About from './About'
import Admin from './Admin';
import CreateForm from './CreateForm';
import EditActivity from './EditActivity';
import EditClubs from './EditClubs';

firebase.initializeApp(firebaseConfig);
firebase.analytics();


const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        setIsSignedIn(!!user)
      }
    );
  })

  if (!isSignedIn) {
    return (
      <div className="container" >
        <div className="boxsignin">
          <div>
            <div className="fontActivity">Activity in PSU Phuket campus</div>
            <img className="headlogo" src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DSC_8815-squoosh.jpg" />
          </div>
          <div className="boxsignin2">
            <p className="pleasesignin">Please sign-in</p>
            {/* <form className="formPSUpassport">
                            <div>PSU Passport</div>
                            <div>username :</div>
                            <div className="wrap-input">
                                <input className="inputlogin" placeholder="Username..." type="text" onChange={e=>setUsername(e.target.value)} />
                            </div>
                            <div>password :</div>
                            <div className="wrap-input">
                                <input className="inputlogin" placeholder="Password..." type="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <button className="buttonSigin" type="submit" >Sign in</button>
                        </form>
                        <div className="Or">Or</div> */}
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Router>
        <Topbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/createform" component={CreateForm} />
          <Route path="/editactivity" component={EditActivity} />
          <Route path="/editclub" component={EditClubs} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
