import React from 'react';

import NavBar from '../parts/navbar';
import './homepage.css';

import AntChart from '../parts/charts';
import AntMapChart from '../parts/mapchart';

function App() {
  
  return (
    <div className="home-container">
      <NavBar/>
      <h1 className="page-title">US Congressional Voting Record Analysis</h1>
      <p className='text'>
        In this project, the voting records of Senators from the 117th Congress (2021-2023)
         will be analyzed. This analysis will display the results of roll call votes over the 
         duration of the 117th Congress. Users will be able to query this data in different ways, 
         such as making categories based on Senator political parties and State origin, or 
         looking at which roll call votes were favoured by certain parties. Users can also perform 
         Create, Read, Update, Delete, and Search operations on the data, so that the the database 
         can be constantly updated or corrected when inaccuracies are noticed. The user can also 
         change the data to other datasets like the 116th congress.
        The data set for this project consists of tables showing all Senators in the 117th Congress, 
        roll call votes that have been voted on, the results of such votes, and the individual votes 
        of Senators for each bill. Senators in the dataset can be identified by their distinct 
        ICSPSR numbers, and roll call votes can be identified by their distinct roll call number.
      </p> <br/><br/>
      <p className='text'>
        The votes of senators can be shown for each bill, with the following table explaining votes:
        <table className='table'>
        <tr>
            <th>Cast Code</th>
            <th>Description</th>
          </tr>
          <tr>
            <th>0</th>
            <th>Not a member of the chamber when this vote was taken</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Yea</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Paired Yea</th>
          </tr>
          <tr>
            <th>3</th>
            <th>Announced Yea</th>
          </tr>
          <tr>
            <th>4</th>
            <th>Announced Nay</th>
          </tr>
          <tr>
            <th>5</th>
            <th>Paired Nay</th>
          </tr>
          <tr>
            <th>6</th>
            <th>Nay</th>
          </tr>
          <tr>
            <th>7</th>
            <th>Present (some Congresses)</th>
          </tr>
          <tr>
            <th>8</th>
            <th>Present (some Congresses)</th>
          </tr>
          <tr>
            <th>9</th>
            <th>Not Voting (Abstention)</th>
          </tr>
        </table>
      </p>
      <div id="chart">
        {/* <AntMapChart/> */}
      </div>
    </div>
  );
}

export default App;
