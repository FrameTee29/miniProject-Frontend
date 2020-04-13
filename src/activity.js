import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Listactivity from './components/listactivity';


const Activity = () => {
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

    return (
        <div>
            Activity
            { activitys.map((activity,index)=>{
                    return(
                        <Listactivity key={index} activity={activity}/>
                    )
                })}
        </div>
    );

}

export default Activity;