import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './signin.css';
import axios from 'axios';


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Signin = () => {
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
    else {
        return (
            <div className="containerlogin">
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                <div>
                    <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL} />
                </div>
                <div>
                    <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
            </div>
        );
    }
}

export default Signin;