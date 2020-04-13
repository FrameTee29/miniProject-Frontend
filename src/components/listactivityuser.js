import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import { Link, } from "react-router-dom";
import './listactivityuser.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Listactivityuser = (props) => {

    const firestore = firebase.firestore();

    const { activity, deleteActivity } = props;
    const { id, date, department, detail, end, give, name, start } = activity;

    const classes = useStyles();
    const [newname, setName] = useState(name)
    const [newdepartment, setdepartment] = useState(department)
    const [newdetail, setdetail] = useState(detail)
    const [newgive, setGive] = useState(give)
    const [newdate, setDate] = useState(date)
    const [newstart, setStart] = useState(start)
    const [newend, setend] = useState(end)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        await firestore.collection('Activity').doc(id).update(
            {
                name: newname,
                department: newdepartment,
                detail: newdepartment,
                give: newgive,
                date: newdate,
                start: newdate,
                end: newend
            })
        setOpen(false);
    };
    const handleClose2 = async () => {
        setOpen(false);
    };



    return (
        <div>
            <div className="Grid-containeruser">
                <div className="grid_1">
                    <div className="item1">
                        <div className="nameact">{name}</div>
                        <div>{date}</div>
                    </div>
                </div>
                <div className="grid_2">
                    <div className="item2">{department}</div>
                </div>
            </div>
        </div>
    )
}

export default Listactivityuser;
