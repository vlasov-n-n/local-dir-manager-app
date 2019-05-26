import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {SectionWrap} from '../Common/CommonComponents';

class Diagram extends Component {
  render() {
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    return (
      <SectionWrap>
          <Doughnut data={data} />
      </SectionWrap>
    );
  }
}

export default Diagram
