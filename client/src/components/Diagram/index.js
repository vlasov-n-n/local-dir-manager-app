import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

import getRandomColor from '../../helpers/getRandomColor';
import {DiagramWrap} from './DiagramStyledComp';
import fileSizeConverter from '../../helpers/fileSizeConverter';

class Diagram extends Component {
  static propTypes = {
    filesStatistic: PropTypes.array
  };

  render() {
    const {
      /** @type {Array<StatItem>} */
      filesStatistic
    } = this.props;

    const labels = filesStatistic ? filesStatistic.map(i => i.type) : [];
    const filesData = filesStatistic ? filesStatistic.map(i => i.size) : [];
    const colors = filesStatistic ?
      filesStatistic.map(
        i => i.colorType
          ? i.colorType
          : getRandomColor(1)[0]) //if colorType null or undefined get random color
      : ['#7c7c7c'];

    const data = {
      labels: labels,
      datasets: [{
        data: filesData,
        backgroundColor: colors
      }]
    };

    const options={
      legend: {
        display: true,
        position: 'left'
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let dataset = data.datasets[tooltipItem.datasetIndex];
            let meta = dataset._meta[Object.keys(dataset._meta)[0]];
            let total = meta.total;
            let currentValue = dataset.data[tooltipItem.index];
            let percentage = parseFloat((currentValue/total*100).toFixed(1));
            return fileSizeConverter(currentValue) + ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      }
    };

    return (
      <DiagramWrap>
        <Doughnut
          options={options}
          data={data}/>
      </DiagramWrap>
    );
  }
}

export default Diagram;
