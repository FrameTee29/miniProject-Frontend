import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Topbar from './components/topbar';
import Zoomout from './components/zoomout';
import Part2Home from './components/Part2Home';


const Home = () => {
  return (
    <div>
     <Zoomout/>
     <Part2Home/>
    </div>
    
  );

}

export default Home;