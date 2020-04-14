import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Zoomout from './components/zoomout';




const Home = () => {
  return (
    <div>
     <Zoomout/>
    </div>
    
  );

}

export default Home;