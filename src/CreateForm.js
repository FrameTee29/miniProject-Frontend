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
                    <div>หน่วยงานที่จัดกิจกรรม</div>
                    <div>รายละเอียด</div>
                    <div>สิ่งที่ได้รับจากกิจกรรม</div>
                    <div>วันที่</div>
                    <div>เวลาที่จัดกิจกรรม</div>
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