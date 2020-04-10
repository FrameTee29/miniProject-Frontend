import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './tobaradmin.css';
import { Link, } from "react-router-dom";

const Topbaradmin = () => {
        if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
            return (
                <div className="Topbar">
                    <Link to="/createform">
                        <button className="btn-menuadmin">Create Form Activity</button>
                    </Link>
                    <Link to="/editactivity">
                        <button className="btn-menuadmin">Edit Activity</button>
                    </Link>
                </div>

            )
        }
        else {
            return null;
        }
}

export default Topbaradmin;