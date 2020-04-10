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
                <form>
                    <div>ชื่อกิจกรรม</div>
                    <input type="text" placeholder="ชื่อกิจกรรม..."/>
                    <div>หน่วยงานที่จัดกิจกรรม</div>
                    <input type="text" placeholder="หน่วยงาน..."/>
                    <div>รายละเอียด</div>
                    <textarea  placeholder="Detail..."/>
                    <div>สิ่งที่ได้รับจากกิจกรรม</div>
                    <textarea  placeholder="Detail..."/>
                    <div>วันที่</div>
                    <input type="date"  min="2020-01-01" max="2023-12-31"/>
                    <div>เวลาที่จัดกิจกรรม</div>
                    <div>เริ่มกิจกรรม</div>
                    <input type="time"/>
                    <div>สิ้นสุดกิจกรรม</div>
                    <input type="time"/>
                </form>
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