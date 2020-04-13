import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import { Link, } from "react-router-dom";
import './listactivity.css';

const Listactivity = (props) => {
    const { activity } = props;
    const { date, department, detail, end, give, name, start } = activity;
    return (
        <div>
            <div className="Grid-container">
                <div className="grid1">
                    <div className="item1">
                        <div className="nameact">{name}</div>
                        <div>{date}</div>
                    </div>
                </div>
                <div className="grid2">
                    <div className="item2">{department}</div>
                </div>
                <div className="btn-edits">
                    <button className="btn-delete">Delete</button>
                    <button className="btn-edit">Edit</button>
                </div>

            </div>
            {/* <div>ชื่อกิจกรรม :{name}</div>
            <div>วันที่ : {date}</div>
            <div>หน่วยงานที่จัดกิจกรรม : {department}</div>
            <div>รายละเอียด : {detail}</div>
            <div>สิ่งที่ได้รับจากกิจกรรม : {give}</div>
            <div>เวลาเริ่มกิจกรรม : {end.substring(0,8)}</div>
            <div>สิ้นสุดกิจกรรม : {start.substring(0,8)}</div> */}

        </div>
    )
}

export default Listactivity;
