import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Topbaradmin from './components/Topbaradmin';

const EditActivity = () => {
    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Topbaradmin />
            EditActivity
            </div>
        );
    }
    else {
        return (
            <div>
                You not Admin
            </div>
        );
    }

}

export default EditActivity;