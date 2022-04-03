import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../parts/navbar';
import './senator.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const [senName, setSenName] = useState('');

  const submitSenName = async () => {
    const dataHolder = document.getElementById('data-holder');
    const textBoxValue = document.getElementById('sName').value;
    const result = await Axios.get('http://34.135.227.212/senator/', {
      params: {keyword: textBoxValue}
    }).catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });

    console.log("Getting");
    console.log(result);
    
    if (result.data.length == 0) dataHolder.innerHTML = "No Results Found for " + textBoxValue;
    else {
      dataHolder.innerHTML = "Search Results";
      const table = document.createElement("table");
      const row0 = document.createElement("tr");
      const item01 = document.createElement("th");
      item01.innerHTML = "SenatorID";
      const item02 = document.createElement("th");
      item02.innerHTML = "Name";
      const item03 = document.createElement("th");
      item03.innerHTML = "Birth Year";
      const item04 = document.createElement("th");
      item04.innerHTML = "Home State";
      const item05= document.createElement("th");
      item05.innerHTML = "Party";
      const item06 = document.createElement("th");
      item06.innerHTML = "Wiki Page URL";
      row0.appendChild(item01);
      row0.appendChild(item02);
      row0.appendChild(item03);
      row0.appendChild(item04);
      row0.appendChild(item05);
      row0.appendChild(item06);
      table.appendChild(row0);
      result.data.forEach(el => {
        console.log(el.SenatorID);
        const row = document.createElement("tr");
        const item1 = document.createElement("th");
        const item2 = document.createElement("th");
        const item3 = document.createElement("th");
        const item4 = document.createElement("th");
        const item5 = document.createElement("th");
        const item6 = document.createElement("th");
        const wikiLink = document.createElement("a");
        
        item1.innerHTML = el.SenatorID;
        item2.innerHTML = el.Name;
        item3.innerHTML = el.BirthYear;
        item4.innerHTML = el.StateName;
        item5.innerHTML = el.PartyName;
        wikiLink.href = el.PageURL;
        wikiLink.innerHTML = el.PageURL;
        item6.appendChild(wikiLink);
        row.appendChild(item1);
        row.appendChild(item2);
        row.appendChild(item3);
        row.appendChild(item4);
        row.appendChild(item5);
        row.appendChild(item6);
        table.appendChild(row);
      });
      dataHolder.appendChild(table);
    }
    
  }

  return (
    <div className='senator-container'>
      <NavBar/>
      <h1 className="page-title">Senators</h1>
      <div className='form'>
        <label for="sName" className='text'>Search for Senator by Name:</label>
        <input type="text" id="sName"></input>
        <button onClick={submitSenName}>Submit</button>
      </div>
      <div id="data-holder">
      </div>
    </div>
  );
}

export default App;
