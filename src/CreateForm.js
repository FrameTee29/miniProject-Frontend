import React, { useState, useEffect } from 'react';
import './CreateForm.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Topbaradmin from './components/Topbaradmin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link, } from "react-router-dom";
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

const CreateForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [department, setdepartment] = useState('')
    const [detail, setdetail] = useState('')
    const [give, setGive] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [end, setend] = useState('')
    const [open, setOpen] = useState(false);

    const firestore = firebase.firestore();

    const addActivity = async () => {
         await firestore.collection('Activity').doc(name).set({ name, department, detail, give, date, start, end })
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div className="containerForm">
                <Topbaradmin />
                <div className="FormActivity">
                    <div className="Head">CreateForm</div>
                    <div className="boxform">
                        <div className="header">ชื่อกิจกรรม</div>
                        <input className="input1" type="text" placeholder="ชื่อกิจกรรม..." onChange={e => setName(e.target.value)} />

                        <div className="header">หน่วยงานที่จัดกิจกรรม</div>
                        <input className="input1" type="text" placeholder="หน่วยงาน..." onChange={e => setdepartment(e.target.value)} />

                        <div className="header">รายละเอียด</div>
                        <textarea className="textarea1" placeholder="Detail..." onChange={e => setdetail(e.target.value)} />

                        <div className="header">สิ่งที่ได้รับจากกิจกรรม</div>
                        <textarea className="textarea1" placeholder="Detail..." onChange={e => setGive(e.target.value)} />

                        <div className="header">วันที่</div>
                        <input type="date" min="2020-01-01" max="2023-12-31" onChange={e => setDate(e.target.value)} />


                        <div className="header">เวลาที่จัดกิจกรรม</div>
                        <div className="header1_1">เริ่มกิจกรรม</div>
                        <input type="time" onChange={e => setStart(e.target.value)} />

                        <div className="header1_1">สิ้นสุดกิจกรรม</div>
                        <input type="time" onChange={e => setend(e.target.value)} />
                        <div className="lastbutton">
                            <button className="submit1" type="button" onClick={addActivity}>Create</button>
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
                                        <div className="header">Status create activity</div>
                                        <div>Succuess</div>
                                        <Link to="/admin">
                                            <Button variant="contained" color="primary" >OK</Button>
                                        </Link>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
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