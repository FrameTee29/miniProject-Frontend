import Topbaradmin from './components/Topbaradmin';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import PartEditClub from './components/PartEditClub'
import PartEditOrganization from './components/PartEditOrganization';

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

const EditClubs = () => {

    const firestore = firebase.firestore();
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [clubs, setClubs] = useState([]);

    const [name, setName] = useState('')
    const [leader, setLeader] = useState('')
    const [email, setEmail] = useState('')

    const getClub = async () => {
        await firestore.collection("Club").orderBy('id', 'asc').onSnapshot((snapshot) => {
            let myClubs = snapshot.docs.map((d) => {
                const { id, name, leader, email } = d.data();
                return { id, name, leader, email };
            })
          setClubs(myClubs);
        })
    }

    const addClub = async () => {
        const id = (clubs.length === 0) ? 1 : clubs[clubs.length - 1].id + 1;
        await firestore.collection('Club').doc(id + '').set({ id, name, leader, email });
        setOpen(false);
    }

    const deleteClub = (id) => {
        firestore.collection("Club").doc(id + '').delete();
    }

    useEffect(() => {
        getClub();
    }, [])


    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Topbaradmin />
                editclub
                <PartEditClub/>
                editOrganization
                <PartEditOrganization/>
            </div>
        )
    }
    else {
        return (
            <div>
                You not admin
            </div>
        );
    }

}
export default EditClubs;