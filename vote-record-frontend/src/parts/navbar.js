import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

function App() {
  return (
    <div id='nav-bar-container'>
      <Link className='nav-bar-button' to='/'>Home</Link>
      <Link className='nav-bar-button' to='/party'>Party</Link>
      <Link className='nav-bar-button' to='/senator'>Senator</Link>
      <Link className='nav-bar-button' to='/Roll'>Roll</Link>
      <Link className='nav-bar-button' to='/modify'>Modify Data</Link>
      <Link className='nav-bar-button' to='/adv'>Interesting Cases</Link>
    </div>
  );
}

export default App;