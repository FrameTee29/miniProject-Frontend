import React, { useState, useEffect } from 'react';
import './App.css';

import firebase from 'firebase';
import Signin from './components/signin';

const App = () => {

  return (
    <div className="App">
      <Signin/>
    </div>
  );
}

export default App;
