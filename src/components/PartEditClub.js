
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

const PartEditClub = () => {

    const firestore = firebase.firestore();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [clubs, setClubs] = useState([]);

    const getClub = async () => {
        await firestore.collection("Club").orderBy('id', 'asc').onSnapshot((snapshot) => {
            let myClubs = snapshot.docs.map((d) => {
                const { id, name, leader, email } = d.data();
                return { id, name, leader, email };
            })
            setClubs(myClubs);
        })
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const handleClose2 = async () => {
        setOpen(false);
    };

    useEffect(() => {
        getClub();
    }, [])

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleOpen}><div className="Heading4">เพิ่มชมรม</div></Button>
                <div className="ContainerAbout">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell ><div className="Heading1">ชื่อชมรม</div></TableCell>
                                    <TableCell ><div className="Heading1">ประธานชมรม</div></TableCell>
                                    <TableCell ><div className="Heading1">อีเมล์ชมรม</div></TableCell>
                                    <TableCell ><div className="Heading1">อัพเดทข้อมูล</div></TableCell>
                                    <TableCell ><div className="Heading1">ลบข้อมูล</div></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clubs.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row"><input className="Heading2" value={row.name}/></TableCell>
                                        <TableCell ><input className="Heading3" value={row.leader}/></TableCell>
                                        <TableCell><input className="Heading3" value={row.email}/></TableCell>
                                        <TableCell><Button variant="contained" color="primary">Update</Button></TableCell>
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
                        {/* <div className="header">Status create activity</div>
                        <div>Succuess</div> */}
                        <form>
                            <div>
                                <div className="header">ชื่อชมรม</div>
                                <input className="input1" type="text" value="ชื่อชมรม"  />

                                <div className="header">ประธานชมรม</div>
                                <input className="input1" type="text" value="ประธาน"  />

                                <div className="header">อีเมล์ติดต่อ</div>
                                <input className="input1" type="text" value="ประธาน"  />

                            </div>
                        </form>

                        <div>
                            <br></br>
                            <Button variant="contained" color="primary" onClick={handleClose2} >Add</Button>
                            &nbsp;
                            <Button variant="contained" color="primary" onClick={handleClose2} >Cancel</Button>
                        </div>

                    </div>
                </Fade>
            </Modal>

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
export default PartEditClub;