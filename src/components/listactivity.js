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
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { activity, deleteActivity } = props;
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
                        <div className="header">Status create activity</div>
                        <div>Succuess</div>
                        <Button variant="contained" color="primary" onClick={handleClose} >Update</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default Listactivity;
