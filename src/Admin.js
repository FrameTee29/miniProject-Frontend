import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Topbaradmin from './components/Topbaradmin';

const Admin = () => {

    const [admin, setAdmin] = useState("False");

    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if (user.email == "s6035512080@phuket.psu.ac.th") {
                    setAdmin("True");
                }
            }
        );
    })
    if (admin == "True") {
        return (
            <div>
                <Topbaradmin/>
                Administrator
                
            </div>
        );
    }
    else{
        return (
            <div>
               You not Administrator
            </div>
        );

    }



}

export default Admin;