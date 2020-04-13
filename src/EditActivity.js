import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbaradmin from './components/Topbaradmin';
import Listactivity from './components/listactivity';

const EditActivity = () => {
    const [activitys, setActivitys] = useState([]);

    const firestore = firebase.firestore();

    const getAcitivity = async () => {
        await firestore.collection("Activity").onSnapshot((snapshot) => {
            let myactivity = snapshot.docs.map(d => {
                const { date, department, detail, end, give, name, start } = d.data();
                return { date, department, detail, end, give, name, start };
            });
            console.log(myactivity)
            setActivitys(myactivity);
        });

    }

    useEffect(()=>{
        getAcitivity();
    },[])

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Topbaradmin />
                    EditActivity
                { activitys.map((activity,index)=>{
                    return(
                        <Listactivity key={index} activity={activity}/>
                    )
                })}
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



