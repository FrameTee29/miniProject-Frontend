import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import './topbar.css';
const Topbar = () => {
    return (
        <header>
            <nav>
                <div></div>
                <div><a href="/">THE LOGO</a></div>
                <div></div>
            </nav>
        </header>
    );
}

export default Topbar;