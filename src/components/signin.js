import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './signin.css'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Signin = () => {

    const [isSignedIn, setIsSignedIn] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {
                setIsSignedIn(!!user)
                console.log(user)
            }
        );
    })
    if (!isSignedIn) {
        return (
            <div className="container" >
                <h1>Activity in PSU Phuket campus</h1>
                <img className="headlogo" src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DSC_8815-squoosh.jpg" />
                <p>Please sign-in:</p>

                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
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