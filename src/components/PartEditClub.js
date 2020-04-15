
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const PartEditClub = () => {

    const firestore = firebase.firestore();
    const classes = useStyles();
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

    useEffect(() => {
        getClub();
    }, [])

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>

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