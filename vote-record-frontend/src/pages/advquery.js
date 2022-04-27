import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import NavBar from '../parts/navbar';
import AntChart from '../parts/charts';

import './modifydata.css';

function App() {
  const [senName, setSenName] = useState('');
  var chartData = [{
    type: 'Positive',
    value: 0
  }, {
    type: 'Negative',
    value: 0
  }];
  var chartColor = ['#0080ff', '#ff0000', '#40ff00', '#ffbf00'];
  const getQuery1 = async () => {
    chartData[0].value = 0;
    chartData[1].value = 0;
    document.getElementById("query-result-title").innerHTML = "Advanced Query #1 Results";
    const dataHolder = document.getElementById('data-holder');
    const result = await Axios.get('//34.135.227.212/adv1-us').catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });
    console.log(result);
    if (result.data.length != 0) {
      dataHolder.innerHTML = "";
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
        if (el.Results.includes("Confirmed") || el.Results.includes("Agreed") || el.Results.includes("Passed")) {
          chartData[0].value++;
        } else chartData[1].value++;
      });
      dataHolder.appendChild(table);
    } else dataHolder.innerHTML = "No Results";
    const root = ReactDOM.createRoot(document.getElementById("chart-holder"));
    root.render(<AntChart id='Senator-Chart' data={[...chartData]} color={chartColor} title='Bill Results'/>);
  };

  const getQuery2 = async () => {
    chartData[0].value = 0;
    chartData[1].value = 0;
    document.getElementById("query-result-title").innerHTML = "Advanced Query #2 Results";
    const dataHolder = document.getElementById('data-holder');
    const result = await Axios.get('//34.135.227.212/adv2-us').catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });
    console.log(result);
    if (result.data.length != 0) {
      dataHolder.innerHTML = "";
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
        if (el.Results.includes("Confirmed") || el.Results.includes("Agreed") || el.Results.includes("Passed")) {
          chartData[0].value++;
        } else chartData[1].value++;
      });
      dataHolder.appendChild(table);
    } else dataHolder.innerHTML = "No Results";
    const root = ReactDOM.createRoot(document.getElementById("chart-holder"));
    root.render(<AntChart id='Senator-Chart' data={[...chartData]} color={chartColor} title='Bill Results'/>);
  }
  return (
    <div className='modify-container'>
      <NavBar/>
      <h1 className="page-title">Interesting Cases &amp; Advanced Queries</h1>
      <p>We have built two advanced queries. They provide interesting ways
        to use the data we have. <br/>
        <b>Press on Either Button Below to Start an Advanced Query.</b>
      </p>
      <p>The first advanced query returns all bills that has a majority of "yea" votes.
        This helps us see which bills were passed by the 117th senate. <br/>
        Query #1 returns the BillID, number of "yea" votes, vote results, and date, 
        for all bills that has a majority of yea votes.
      </p>
      <div className='modify-button' onClick={getQuery1}>Query 1</div>
      <p> The second advanced query returns the BillID, number of "nay" votes, vote results, and date,
        for all bills that were passed. Sorted in descending order by number of "nay" votes from democrats. <br/>
        This helps us see what bills were really disliked by the democrats but were still passed.
      </p>
      <div className='modify-button' onClick={getQuery2}>Query 2</div>
      <h2 id="query-result-title">Advanced Query Results</h2>
      <div id="chart-holder"></div>
      <div id="data-holder">N/A</div>
    </div>
  );
}

export default App;