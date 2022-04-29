import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import NavBar from '../parts/navbar';
import './senator.css';
import { useNavigate } from 'react-router-dom';
import AntChart from '../parts/charts';
function App() {
  const [senName, setSenName] = useState('');
  var chartData = [{
    type: 'Democrat',
    value: 0
  }, {
    type: 'Republican',
    value: 0
  }, {
    type: 'Independent',
    value: 0
  }, {
    type: 'Other Parties',
    value: 0
  }];
  var chartColor = ['#0080ff', '#ff0000', '#40ff00', '#ffbf00'];
  const submitSenName = async () => {
    const dataHolder = document.getElementById('data-holder');
    const textBoxValue = document.getElementById('sName').value;
    const result = await Axios.get('//34.135.227.212/senator/', {
      params: {keyword: textBoxValue}
    }).catch(function (error) {
      console.log(error);
      dataHolder.innerHTML = "Network Error: Connection Refused. Check if VM instance is running.";
      return;
    });
    chartData[0].value = 0;
    chartData[1].value = 0;
    chartData[2].value = 0;
    chartData[3].value = 0;
    console.log("Getting");
    // console.log(result);
    
    if (result.data.length === 0) dataHolder.innerHTML = "No Results Found for " + textBoxValue;
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
        //console.log(el.SenatorID);
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
        if (el.PartyName === "Democrat") chartData[0].value++;
        else if (el.PartyName === "Republican") chartData[1].value++;
        else if (el.PartyName === "Independent") chartData[2].value++;
        else chartData[3].value++;
      });
      dataHolder.appendChild(table);
    }
    const root = ReactDOM.createRoot(document.getElementById("chart-holder"));
    root.render(<AntChart id='Senator-Chart' data={[...chartData]} color={chartColor} title='Party Composition'/>);
  }

  return (
    <div className='senator-container'>
      <NavBar/>
      <h1 className="page-title">Senators</h1>
      <div className='form'>
        <label for="sName" className='text' style={{"fontSize":"24px", "lineHeight":"24px"}}>Search for Senator by Name:</label>
        <input type="text" id="sName"></input>
        <button onClick={submitSenName}>Submit</button>
      </div>
      <div id="chart-holder"></div>
      <div id="data-holder">
      </div>
    </div>
  );
}

export default App;
