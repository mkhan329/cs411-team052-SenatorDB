import React from 'react';
import NavBar from '../parts/navbar';

function App() {
  return (
    <div className='party-container'>
      <NavBar/>
      <h1 className="page-title">Voting Analysis By Party</h1>
      <form>
        <label for="rNumber">Select Roll</label>
        <input type="number" id="rNumber" value="1"></input>
      </form>
    </div>
  );
}

export default App;