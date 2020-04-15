import './PartEditClub.css'
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
import EditIcon from '@material-ui/icons/Edit';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

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

const PartEditClub = (props) => {

    const firestore = firebase.firestore();
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [clubs, setClubs] = useState([]);

    const [name, setName] = useState('')
    const [leader, setLeader] = useState('')
    const [email, setEmail] = useState('')

    const [statusname, setStatusName] = useState(false)
    const [statusleader, setStatusLeader] = useState(false)
    const [statusemail, setStatusEmail] = useState(false)

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

    const updateClub = async (ids, names, leaders, emails) => {
        await firestore.collection("Club").doc(ids + '').update(
            {
                id: ids,
                name: names,
                leader: leaders,
                email: emails
            }
        )
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const setEditname = () => {
        if (statusname == false) {
            setStatusName(true)
        }
        else {
            setStatusName(false)
        }
    }

    const setEditleader = () => {
        if (statusleader == false) {
            setStatusLeader(true)
        }
        else {
            setStatusLeader(false)
        }
    }

    const setEditemail = () => {
        if (statusemail == false) {
            setStatusEmail(true)
        }
        else {
            setStatusEmail(false)
        }
    }

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
                                    <TableCell ><div className="Heading1">ลบข้อมูล</div></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clubs.map((row) => {

                                    return (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                <div className="rowPartclub"><div className="Heading2">{row.name}</div><EditIcon onClick={() => setEditname()} /></div>
                                                {statusname ? <div className="rowPartclub"><input className="Heading2" onChange={e => setName(e.target.value)} />
                                                <SystemUpdateAltIcon onClick={() => {
                                                    setEditname()
                                                    updateClub(row.id, name, row.leader, row.email)} }/></div> : <div></div>}
                                            </TableCell>
                                            <TableCell >
                                                <div className="rowPartclub"> <div className="Heading3">{row.leader}</div><EditIcon onClick={() => setEditleader()} /></div>
                                                {statusleader ? <div className="rowPartclub"><input className="Heading3" onChange={e => setLeader(e.target.value)} />
                                                <SystemUpdateAltIcon onClick={() =>{
                                                    setEditleader()
                                                    updateClub(row.id,row.name,leader, row.email)}} /></div> : <div></div>}
                                            </TableCell>
                                            <TableCell>
                                            <div className="rowPartclub"><div className="Heading3">{row.email}</div><EditIcon onClick={() => setEditemail()} /></div>
                                                {statusemail ? <div className="rowPartclub"><input className="Heading3" onChange={e => setEmail(e.target.value)} />
                                                <SystemUpdateAltIcon onClick={() =>{
                                                    setEditemail() 
                                                    updateClub(row.id,row.name,row.leader,email)}} /></div> : <div></div>}
                                                
                                                
                                            </TableCell>
                                            <TableCell><Button variant="contained" color="secondary" onClick={() => deleteClub(row.id)}>Delete</Button></TableCell>
                                        </TableRow>
                                    );
                                })}
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
                                    <input className="input1" type="text" placeholder="ชื่อชมรม" onChange={e => setName(e.target.value)} />

                                    <div className="header">ประธานชมรม</div>
                                    <input className="input1" type="text" placeholder="ประธาน" onChange={e => setLeader(e.target.value)} />

                                    <div className="header">อีเมล์ชมรม</div>
                                    <input className="input1" type="text" placeholder="อีเมล์ชมรม" onChange={e => setEmail(e.target.value)} />

                                </div>
                            </form>

                            <div>
                                <br></br>
                                <Button variant="contained" color="primary" onClick={addClub} >Add</Button>
                            &nbsp;
                            <Button variant="contained" color="primary" onClick={handleClose} >Cancel</Button>
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