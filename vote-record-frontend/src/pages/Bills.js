import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import AntChart from '../parts/charts';

import NavBar from '../parts/navbar';

import './modifydata.css';

function App() {
  let bills = [];
  const callProcedure = async () => {
    document.getElementById("chart-holder").innerHTML = "Waiting For Data ...";
    console.log("LOL");
    const dataHolder = document.getElementById('data-holder');
    dataHolder.innerHTML = "<br/> Fetching Data From the Backend, This May Take a While ..."
    const result = await Axios.get('http://34.135.227.212/procedure').catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      document.getElementById("chart-holder").innerHTML = "";
      return;
    });
    console.log("Getting");
    console.log(result);
    
    if (result.data.length === 0) dataHolder.innerHTML = "The Stored Procedure did not return anything";
    else {
      document.getElementById("chart-holder").innerHTML = "Click on any BillID to visualize the data.";
      for (let i = 0; i <  result.data[0].length; i+=3) {
        let BillId = result.data[0][i].BillId;
        let vp1, vp2, vp3 = 0;
        if (result.data[0][i] !== null || result.data[0][i].VotePercentage !== null) {
          vp1 = result.data[0][i].VotePercentage;
        }
        if (result.data[0][i+2] !== null || result.data[0][i+2].VotePercentage !== null) {
          vp2 = result.data[0][i+2].VotePercentage;
        }
        if (result.data[0][i+1] !== null || result.data[0][i+1].VotePercentage !== null) {
          vp3 = result.data[0][i+1].VotePercentage;
        }
        let line = [
          BillId,
          (vp1 * 100).toFixed(3),
          (vp2 * 100).toFixed(3),
          (vp3 * 100).toFixed(3)
        ];
        bills.push(line); 
      }

      dataHolder.innerHTML = "<h1>Procedure Results</h1>";
      const table = document.createElement("table");
      const row0 = document.createElement("tr");
      const item01 = document.createElement("th");
      item01.innerHTML = "BillID";
      const item02 = document.createElement("th");
      item02.innerHTML = "% Democrats Yea Votes";
      const item03 = document.createElement("th");
      item03.innerHTML = "% Republicans Yea Votes";
      const item04 = document.createElement("th");
      item04.innerHTML = "% Independent Yea Votes";
      row0.appendChild(item01);
      row0.appendChild(item02);
      row0.appendChild(item03);
      row0.appendChild(item04);
      table.appendChild(row0);

      bills.forEach(
        el => {
          const row = document.createElement("tr");
          const idButton = document.createElement("button");
          const item1 = document.createElement("th");
          const item2 = document.createElement("th");
          const item3 = document.createElement("th");
          const item4 = document.createElement("th");

          idButton.innerHTML = el[0];
          idButton.className = "id-draw-button";
          idButton.onclick = function () {
            console.log("Clicked");
            drawChart(el[1], el[2], el[3]);
          };
          item1.appendChild(idButton);
          item2.innerHTML = el[1];
          item3.innerHTML = el[2];
          item4.innerHTML = el[3];

          row.appendChild(item1);
          row.appendChild(item2);
          row.appendChild(item3);
          row.appendChild(item4);

          table.appendChild(row);
        });
      dataHolder.appendChild(table);
    }
  }

  return (
    <div className='bills-container'>
      <NavBar/>
      <h1 className="page-title">Bill Votes Analysis</h1>
      <p>We have built a stored procedure with MySQL, that returns the fraction
        of senators from each party that voted yea for every Bill. 
        <br/>
        Click the button below to call the stored procedure, the results will be compiled into a table.
        <br/>
        <b>The BillID of each row can be clicked to visualize the data into a pie chart.</b>
      </p>
      <button onClick={callProcedure}>Call Stored Procedure</button>
      <div id="chart-holder"></div>
      <div id="data-holder"></div>
     
    </div>
  );
}

export default App;

function drawChart(data1, data2, data3) {
  console.log("Trying to draw chart");
  console.log(data1+ ","+data2+","+data3);
  var chartData = [{
    type: 'Democrat',
    value: Math.ceil(data1)
  }, {
    type: 'Republican',
    value: Math.ceil(data2)
  }, {
    type: 'Independent',
    value: Math.ceil(data3)
  }];
  var chartColor = ['#0080ff', '#ff0000', '#40ff00'];

  const root = ReactDOM.createRoot(document.getElementById("chart-holder"));
  root.render(<AntChart id='Bills-Chart' data={[...chartData]} color={chartColor} title='Yea Votes Composition'/>);
}