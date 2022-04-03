import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../parts/navbar';

import './modifydata.css';

function App() {
  const insertURL = 'http://34.135.227.212/insert';
  const deleteURL = 'http://34.135.227.212/delete';
  const updateURL = 'http://34.135.227.212/update';
  return (
    <div className='modify-container'>
      <NavBar/>
      <h1 className="page-title">Making Changes to the Database</h1>
      <p>We want our database to be as up to date and accurate as possible, that is why
        we are giving you the tools to modify the data in this database.
      </p>
      <h2>Modify Senators</h2>
      <div className='modify-button' onClick={() => {window.open(insertURL, "_blank").focus()}}>Insert Senator</div>
      <div className='modify-button' onClick={() => {window.open(deleteURL, "_blank").focus()}}>Delete Senator</div>
      <div className='modify-button' onClick={() => {window.open(updateURL, "_blank").focus()}}>Update Information</div>    
    </div>
  );
}

export default App;