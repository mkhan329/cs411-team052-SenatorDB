import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../parts/navbar';
import './roll.css';
function App() {
  const [rollNumber, setRollNumber] = useState('');

  const submitRollNumber = async () => {
    const textBoxValue = document.getElementById('rNumber').value;
    const test = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + textBoxValue);
    console.log("Getting");
    console.log(test.data.abilities[0].ability.name);
    document.getElementById('data-holder').innerHTML = test.data.abilities[0].ability.name;
  }

  return (
    <div className='roll-container'>
      <NavBar/>
      <h1 className="page-title">Voting Analysis By Roll</h1>
      <div className='form'>
        <label for="rNumber" className='text'>Select Roll by Number</label>
        <input type="text" id="rNumber"></input>
        <button onClick={submitRollNumber}>Submit</button>
      </div>
      <div id="data-holder">
      </div>
    </div>
  );
}

export default App;