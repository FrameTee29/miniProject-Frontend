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
            {date} + {department} + {detail} + {end} + {give} + {name} + {start}
        </li>
    )
}

export default Listactivity;
