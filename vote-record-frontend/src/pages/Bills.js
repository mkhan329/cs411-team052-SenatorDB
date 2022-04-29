import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../parts/navbar';

import './modifydata.css';

function App() {
  return (
    <div className='modify-container'>
      <NavBar/>
      <h1 className="page-title">Making Changes to the Database</h1>
     
    </div>
  );
}

export default App;