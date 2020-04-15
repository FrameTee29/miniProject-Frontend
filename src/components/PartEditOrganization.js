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
import './Part1About.css'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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

const PartEditOrganization = () => {

    const firestore = firebase.firestore();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [organizations, setOrganizations] = useState([]);

    const [organize, setOrganize] = useState('')
    const [responesby, setResponesby] = useState('')
    const [email, setEmail] = useState('')

    const [statusOrganize, setStatusOrganize] = useState(false)
    const [statusResponesby, setStatusResponesby] = useState(false)
    const [statusEmail, setStatusEmail] = useState(false)

    const getorganizations = async () => {

        await firestore.collection("Center").orderBy('id', 'asc').onSnapshot((snapshot) => {
            let myorganizations = snapshot.docs.map((d) => {
                const { id, organize, responesby, email } = d.data();

                return { id, organize, responesby, email };
            })
            setOrganizations(myorganizations);
        })
    }

    const addOrganization = async() =>{
        const id = (organizations.length === 0) ? 1 : organizations[organizations.length-1].id+1;
        await firestore.collection('Center').doc(id+'').set({id,organize,responesby,email});
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    useEffect(() => {
        getorganizations();
    }, [])

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Button variant="contained" color="primary" href="#contained-buttons"  onClick={handleOpen}><div className="Heading4">เพิ่มองค์กร</div></Button>
                <div className="ContainerAbout">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell ><div className="Heading1">องค์กรกิจกรรม</div></TableCell>
                                    <TableCell ><div className="Heading1">รับผิดชอบโดย</div></TableCell>
                                    <TableCell ><div className="Heading1">อีเมล์องค์กร</div></TableCell>
                                    <TableCell ><div className="Heading1">ลบข้อมูล</div></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {organizations.map((row) => (
                                    <TableRow key={row.organize}>
                                        <TableCell component="th" scope="row"><input className="Heading2" value={row.organize} /></TableCell>
                                        <TableCell ><input className="Heading3" value={row.responesby} /></TableCell>
                                        <TableCell><input className="Heading3" value={row.email} /></TableCell>
                                        <TableCell><Button variant="contained" color="secondary">Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                            <div className="header">Add Organization</div>
                            <form>
                                <div>
                                    <div className="header">ชื่อองค์กร</div>
                                    <input className="input1" type="text" placeholder="ชื่อองค์กร" onChange={e => setOrganize(e.target.value)} />

                                    <div className="header">ผู้รับผิดชอบ</div>
                                    <input className="input1" type="text" placeholder="ผู้รับผิดชอบ" onChange={e => setResponesby(e.target.value)} />

                                    <div className="header">อีเมล์องค์กร</div>
                                    <input className="input1" type="text" placeholder="อีเมล์องค์กร" onChange={e => setEmail(e.target.value)} />

                                </div>
                            </form>
                            <div>
                                <br></br>
                                <Button variant="contained" color="primary" onClick={addOrganization} >Add</Button>
                            &nbsp;
                            <Button variant="contained" color="primary" onClick={handleClose} >Cancel</Button>
                            </div>

                        </div>
                    </Fade>
                </Modal>
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

export default PartEditOrganization;