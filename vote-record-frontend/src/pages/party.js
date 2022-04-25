import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import NavBar from '../parts/navbar';
// import AntMapChart from '../parts/mapchart'
import './party.css';
function App() {
  return (
    <div className='party-container'>
      <NavBar/>
      <h1>LMAO</h1>
      <div id="chart-holder"></div>
    </div>
  );
}

export default App;