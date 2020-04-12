import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbaradmin from './components/Topbaradmin';

const EditActivity = () => {

    const firestore = firebase.firestore();

    const getAcitivity = () => {
        firestore.collection("Activity").get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=>{
                console.log(doc.id, " => ", doc.data());
            });
        });
    }

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Topbaradmin />
            EditActivity
                <button onClick={getAcitivity}>Click</button>
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