import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Part1About from './components/Part1About'

const About = () => {

    return (
        <div>
            Clubs
            <Part1About />
        </div>
    );

}

export default About;