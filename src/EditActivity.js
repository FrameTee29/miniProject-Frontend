import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Topbaradmin from './components/Topbaradmin';
import Listactivity from './components/listactivity';
import './EditActivity.css'

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

    useEffect(() => {
        getAcitivity();
    }, [])

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div >
                <Topbaradmin />
                <div className="OuterEdit">
                    <div className="ContainerEdit">
                        <div className="HeadEdit">EditActivity</div>
                            {activitys.map((activity, index) => {
                        return (
                            <Listactivity key={index} activity={activity} />
                        )
                    })}
                    </div>
                </div>
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



