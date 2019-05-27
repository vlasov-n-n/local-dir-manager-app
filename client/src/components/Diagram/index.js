import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

import getRandomColor from '../../helpers/getRandomColor';
import {DiagramWrap} from './DiagramStyledComp';

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
    const colors = filesStatistic ? getRandomColor(filesStatistic.length) : ['#FF6384'];

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
