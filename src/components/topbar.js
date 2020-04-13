import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './topbar.css';
import { Link, } from "react-router-dom";

const Topbar = () => {

    const checkEmail = () => {

        if(firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th"){
            return (
                <Link to="/editactivity">
                    <button className="btn-menu">Administrator</button>
                </Link>
            )
        }
        else{
            return null;
        }
    }

    return (
        <div>
            <div className="boxtopbar">
                

                    <Link to="/home">
                        <img className="PSU" src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png"></img>
                    </Link>
                    <div className="barmenu">
                    <Link to="/home">
                        <button className="btn-menu">Home</button>
                    </Link>
                    <Link to="/activity">
                        <button className="btn-menu">Activity</button>
                    </Link>
                    {/* <Link to="/history">
                        <button className="btn-menu">History</button>
                    </Link> */}
                    {checkEmail()}
                    
                </div>
                <div className="barname">
                    <img className="PhotoURL" id="photo" src={firebase.auth().currentUser.photoURL} />
                    <div className="displayName">{firebase.auth().currentUser.displayName}</div>
                    <button className="btn-signout" onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
            </div>
        </div>
    );
}

export default Topbar;