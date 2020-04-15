import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Part1About from './components/Part1About'
import Part2About from './components/Part2About'

const About = () => {

    return (
        <div>
            Clubs
            <Part1About />
            Organizations
            <Part2About />
        </div>
    );

}

export default About;