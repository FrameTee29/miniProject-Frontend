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


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const PartEditOrganization = () => {

    const firestore = firebase.firestore();
    const classes = useStyles();
    const [organizations, setOrganizations] = useState([]);
    const getorganizations = async () => {

        await firestore.collection("Center").orderBy('id', 'asc').onSnapshot((snapshot) => {
            let myorganizations = snapshot.docs.map((d) => {
                const { id, organize, responesby, email } = d.data();

                return { id, organize, responesby, email };
            })
            console.log(JSON.stringify(myorganizations))
            setOrganizations(myorganizations);
        })
    }

    useEffect(() => {
        getorganizations();
    }, [])


    return (
        <div className="ContainerAbout">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell ><div className="Heading1">องค์กรกิจกรรม</div></TableCell>
                            <TableCell ><div className="Heading1">รับผิดชอบโดย</div></TableCell>
                            <TableCell ><div className="Heading1">อีเมล์องค์กร</div></TableCell>
                            <TableCell ><div className="Heading1">อัพเดทข้อมูล</div></TableCell>
                            <TableCell ><div className="Heading1">ลบข้อมูล</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {organizations.map((row) => (
                            <TableRow key={row.organize}>
                                <TableCell component="th" scope="row"><div className="Heading2">{row.organize}</div></TableCell>
                                <TableCell ><div className="Heading3">{row.responesby}</div></TableCell>
                                <TableCell><div className="Heading3">{row.email}</div></TableCell>
                                <TableCell><Button variant="contained" color="primary">Update</Button></TableCell>
                                <TableCell><Button variant="contained" color="secondary">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PartEditOrganization;