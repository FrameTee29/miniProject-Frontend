import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import { Link, } from "react-router-dom";

const Listactivity =(props)=>{
    const {activity}=props;
    const { date, department, detail, end, give, name, start } = activity;
    return(
        <li>
             <div>ชื่อกิจกรรม :{name}</div>
            <div>วันที่ : {date}</div>
            <div>หน่วยงานที่จัดกิจกรรม : {department}</div>
            <div>รายละเอียด : {detail}</div>
            <div>สิ่งที่ได้รับจากกิจกรรม : {give}</div>
            <div>เวลาเริ่มกิจกรรม : {end}</div>
            <div>สิ้นสุดกิจกรรม : {start}</div>
              
        </li>
    )
}

export default Listactivity;
