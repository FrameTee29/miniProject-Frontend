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

const EditClubs = () => {

    const firestore = firebase.firestore();

    if (firebase.auth().currentUser.email == "s6035512080@phuket.psu.ac.th") {
        return (
            <div>
                <Topbaradmin />
                <div className="ContainerAboutout">
                    <div className="ContainerAboutinner">
                        <p className="HeadingAbout1">แก้ไขชมรม </p>
                        <PartEditClub />
                        <p className="HeadingAbout1">แก้ไของค์กร</p>
                        <PartEditOrganization />
                    </div>
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
export default EditClubs;