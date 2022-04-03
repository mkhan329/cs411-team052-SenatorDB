import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../parts/navbar';

import './modifydata.css';

function App() {
  const [senName, setSenName] = useState('');

  const getQuery1 = async () => {
    const dataHolder = document.getElementById('data-holder');
    const result = await Axios.get('http://34.135.227.212/adv1-us').catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });
    console.log(result);
    dataHolder.innerHTML = "";
    if (result.data.length != 0) {
      const table = document.createElement("table");
      const row0 = document.createElement("tr");
      const item01 = document.createElement("th");
      item01.innerHTML = "BillID";
      const item02 = document.createElement("th");
      item02.innerHTML = "Date";
      const item03 = document.createElement("th");
      item03.innerHTML = "Yea Count";
      const item04 = document.createElement("th");
      item04.innerHTML = "Results";
      row0.appendChild(item01);
      row0.appendChild(item02);
      row0.appendChild(item03);
      row0.appendChild(item04);
      table.appendChild(row0);
      result.data.forEach(el => {
        console.log(el.SenatorID);
        const row = document.createElement("tr");
        const item1 = document.createElement("th");
        const item2 = document.createElement("th");
        const item3 = document.createElement("th");
        const item4 = document.createElement("th");
        item1.innerHTML = el.BillID;
        item2.innerHTML = el.Date;
        item3.innerHTML = el.YesCount;
        item4.innerHTML = el.Results;
        row.appendChild(item1);
        row.appendChild(item2);
        row.appendChild(item3);
        row.appendChild(item4);
        table.appendChild(row);
      });
      dataHolder.appendChild(table);
    } else dataHolder.innerHTML = "No Results";
  };
  const getQuery2 = async () => {
    const dataHolder = document.getElementById('data-holder');
    const result = await Axios.get('http://34.135.227.212/adv2-us').catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });
    console.log(result);
    dataHolder.innerHTML = "";
    if (result.data.length != 0) {
      const table = document.createElement("table");
      const row0 = document.createElement("tr");
      const item01 = document.createElement("th");
      item01.innerHTML = "BillID";
      const item02 = document.createElement("th");
      item02.innerHTML = "Date";
      const item03 = document.createElement("th");
      item03.innerHTML = "Nay Count";
      const item04 = document.createElement("th");
      item04.innerHTML = "Results";
      row0.appendChild(item01);
      row0.appendChild(item02);
      row0.appendChild(item03);
      row0.appendChild(item04);
      table.appendChild(row0);
      result.data.forEach(el => {
        console.log(el.SenatorID);
        const row = document.createElement("tr");
        const item1 = document.createElement("th");
        const item2 = document.createElement("th");
        const item3 = document.createElement("th");
        const item4 = document.createElement("th");
        item1.innerHTML = el.BillID;
        item2.innerHTML = el.Date;
        item3.innerHTML = el.NoCount;
        item4.innerHTML = el.Results;
        row.appendChild(item1);
        row.appendChild(item2);
        row.appendChild(item3);
        row.appendChild(item4);
        table.appendChild(row);
      });
      dataHolder.appendChild(table);
    } else dataHolder.innerHTML = "No Results";
  }
  return (
    <div className='modify-container'>
      <NavBar/>
      <h1 className="page-title">Interesting Case</h1>
      <p>We have built two advanced queries. They provide interesting ways
        to use the data we have.
      </p>
      <p>The first query returns all bills that has a majority of "yea" votes.
        This helps us see which bills were passed by the 117th senate.
      </p>
      <div className='modify-button' onClick={getQuery1}>Query 1</div>
      <div className='modify-button' onClick={getQuery2}>Query 2</div>
      <h2>Query Results</h2>
      <div id="data-holder">N/A</div>
    </div>
  );
}

export default App;