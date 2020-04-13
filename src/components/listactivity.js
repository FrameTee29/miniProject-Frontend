import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from '../lib/uiConfig';
import firebaseConfig from '../lib/config';
import { Link, } from "react-router-dom";
import './listactivity.css';
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

const Listactivity = (props) => {

    const firestore = firebase.firestore();

    const { activity, deleteActivity } = props;
    const { date, department, detail, end, give, name, start } = activity;

    const classes = useStyles();
    const [newname, setName] = useState('')
    const [newdepartment, setdepartment] = useState('')
    const [newdetail, setdetail] = useState('')
    const [newgive, setGive] = useState('')
    const [newdate, setDate] = useState('')
    const [newstart, setStart] = useState('')
    const [newend, setend] = useState('')
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        await firestore.collection('Activity').doc(name).update(
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
                <div className="grid3">
                    <button className="btn-delete" onClick={() => deleteActivity(name)}>Delete</button>
                    <button className="btn-edit" onClick={handleOpen}>Edit</button>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {/* <div className="header">Status create activity</div>
                        <div>Succuess</div> */}
                        <form>
                            <div>
                                <div className="header">ชื่อกิจกรรม</div>
                                <input className="input1" type="text" value={name} onChange={e => setName(e.target.value)} ></input>

                                <div className="header">หน่วยงานที่จัดกิจกรรม</div>
                                <input className="input1" type="text" onChange={e => setdepartment(e.target.value)} />

                                <div className="header">รายละเอียด</div>
                                <textarea className="textarea1" onChange={e => setdetail(e.target.value)} />

                                <div className="header">สิ่งที่ได้รับจากกิจกรรม</div>
                                <textarea className="textarea1" onChange={e => setGive(e.target.value)} />

                                <div className="header">วันที่</div>
                                <input type="date" min="2020-01-01" max="2023-12-31" onChange={e => setDate(e.target.value)} />

                                <div className="header">เวลาที่จัดกิจกรรม</div>
                                <div className="header1_1">เริ่มกิจกรรม</div>
                                <input type="time" onChange={e => setStart(e.target.value)} />

                                <div className="header1_1">สิ้นสุดกิจกรรม</div>
                                <input type="time" onChange={e => setend(e.target.value)} />
                            </div>
                        </form>

                        <div>
                            <Button variant="contained" color="primary" onClick={handleClose} >Update</Button>
                            &nbsp;
                            <Button variant="contained" color="primary" onClick={handleClose2} >Cancel</Button>

                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default Listactivity;
