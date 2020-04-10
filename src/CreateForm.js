import React, { useState, useEffect } from 'react';
import './CreateForm.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Topbaradmin from './components/Topbaradmin';

const CreateForm = () => {
    const [start, setStart] = useState('')

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div className="containerForm">
                <Topbaradmin />
                <div className="FormActivity">
                    <div className="Head">CreateForm</div>
                    <form className="boxform">
                        <div className="header">ชื่อกิจกรรม</div>
                        <input  className="input1" type="text" placeholder="ชื่อกิจกรรม..." />

                        <div className="header">หน่วยงานที่จัดกิจกรรม</div>
                        <input className="input1" type="text" placeholder="หน่วยงาน..." />

                        <div className="header">รายละเอียด</div>
                        <textarea className="textarea1" placeholder="Detail..." />

                        <div className="header">สิ่งที่ได้รับจากกิจกรรม</div>
                        <textarea className="textarea1" placeholder="Detail..." />

                        <div className="header">วันที่</div>
                        <input type="date" min="2020-01-01" max="2023-12-31" />
                        <div className="header">เวลาที่จัดกิจกรรม</div>
                        <div className="header1_1">เริ่มกิจกรรม</div>
                        <input type="time" onChange={e => setStart(e.target.value)} />
                        {start}
                        <div className="header1_1">สิ้นสุดกิจกรรม</div>
                        <input type="time" />
                        <div className="lastbutton"><button className="submit1" type="submit">Create</button></div>
                    </form>
                </div>

            </div>

        );
    }
    else {
        return (
            <div>
                You not admin
            </div>
        );
    }


}

export default CreateForm;