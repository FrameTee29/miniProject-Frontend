import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './topbar.css';
import { Link, } from "react-router-dom";

const Topbaradmin = () => {
        if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
            return (
                <div>
                    <Link to="/admin">
                        <div>Create Form Activity</div>
                    </Link>
                    <Link to="/admin">
                        <div>Edit Activity</div>
                    </Link>
                </div>

            )
        }
        else {
            return null;
        }
}

export default Topbaradmin;