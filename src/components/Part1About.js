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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const createData(id,name, leader, email) {
//   return {id, name, leader, email };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, ),
//   createData('Ice cream sandwich', 237, 9.0, ),
//   createData('Eclair', 262, 16.0, ),
//   createData('Cupcake', 305, 3.7, ),
//   createData('Gingerbread', 356, 16.0, ),
// ];



const  SimpleTable =()=> {

    const firestore = firebase.firestore();
    const classes = useStyles();
    const [clubs,setClubs] = useState([]);
    const getClub =async()=>{
        await firestore.collection("Club").orderBy('id','asc').onSnapshot((snapshot)=>{
            let myClubs = snapshot.docs.map((d)=>{
                const {id,name,leader,email} = d.data();
                return {id,name,leader,email};
            })
            setClubs(myClubs);
        })
    }

    useEffect(()=>{
        getClub();
    },[])


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >ชื่อชมรม</TableCell>
            <TableCell >ประธานชมรม</TableCell>
            <TableCell >อีเมล์ชมรม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubs.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell >{row.leader}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;