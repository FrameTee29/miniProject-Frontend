import React, { useState, useEffect } from 'react';
import './About.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Part1About from './components/Part1About'
import Part2About from './components/Part2About'

const About = () => {

    return (
        <div>
            <div className="ContainerAboutout">
                <div className="ContainerAboutinner">
                    <p className="HeadingAbout1">Organizations</p>
                    <Part2About />
                    <p className="HeadingAbout1">Clubs</p>
                    <Part1About />
                </div>
            </div>
        </div>
    );

}

export default About;