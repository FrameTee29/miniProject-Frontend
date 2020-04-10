import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Topbaradmin from './components/Topbaradmin';

const CreateForm = () => {
    if(firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th"){
        return (
            <div>
                <Topbaradmin/>
                CreateForm
            </div>
        );
    }
    else{
        return (
            <div>
                You not admin
            </div>
        );
    }
    

}

export default CreateForm;