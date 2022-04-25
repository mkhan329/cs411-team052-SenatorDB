import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import './charts.css'

function App({
  data = [{
    type: 'Democrat',
    value: 0
  },
  {
    type: 'Republican',
    value: 0
  }],
  title = "Chart",
  color = ['#3483eb','#eb3434']
}) {
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.75,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{percentage}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        autoRotate: false
      },
      color: color,
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '24px'
          },
          content: title,
        },
      },
    };
    return <Pie {...config} />;
}

export default App;


// ReactDOM.render(<DemoPie />, document.getElementById('container'));