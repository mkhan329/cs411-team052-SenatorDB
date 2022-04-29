import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './navbar.css';

function App() {
  const pathname = useLocation().pathname;
  return (
    <div id='nav-bar-container'>
      <Link className='nav-bar-button' to='/' id='home-button'>Home</Link>
      {/* <Link className='nav-bar-button' to='/party' id='party'>Party</Link> */}
      <Link className='nav-bar-button' to='/senator' id='senator'>Senator</Link>
      <Link className='nav-bar-button' to='/bills' id='bills'>Bills</Link>
      <Link className='nav-bar-button' to='/modify' id='modify'>Modify Data</Link>
      <Link className='nav-bar-button' to='/adv' id='adv'>Advanced</Link>
    </div>
  );
}

export default App;