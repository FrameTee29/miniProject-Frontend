import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Listactivity from './components/listactivity';
import Listactivityuser from './components/listactivityuser';
import './Activity.css'


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

    useEffect(() => {
        getAcitivity();
    }, [])

    return (
        <div>
            <div className="OuterEdit">
                <div className="ContainerEdit">
                    <div className="HeadEdit">Activity</div>
                    <div className="MenugridActivity">
                        <div className="grid--1">
                            <div className="menuhead">ชื่อกิจกรรม</div>
                        </div>

                        <div className="grid--2">
                            <div className="menuhead">หน่วยงานที่จัดกิจกรรม</div>
                        </div>
                    </div>
                    {activitys.map((activity, index) => {
                        return (
                            <Listactivityuser key={index} activity={activity} />
                        )
                    })}
                </div>
            </div>
        </div>


    );

}

export default Activity;