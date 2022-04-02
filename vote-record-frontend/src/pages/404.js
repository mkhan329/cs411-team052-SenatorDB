import React from 'react';

import NavBar from '../parts/navbar';

function App() {
  return (
    <div className="404-container">
      <NavBar></NavBar>
      <h1>404</h1>
      <h3>The page you are requesting does not exist.</h3>
    </div>
  );
}

export default App;