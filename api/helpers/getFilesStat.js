import {getAllFileColors, setNewFileColors} from './fileTypeColors';
import getRandomColor from './getRandomColor';

/**
 * @param {Array} array
 * @return {Array<StatItem>}
 */
export default (array) => {
  const fileColors = getAllFileColors();
  const filesStatistic = [];

  /**
   * Array group by type
   * @type {Array}
   */
  const result = array
    .filter(item => item.type !== 'DIR')
    .reduce(function(groups, item) {
    const val = item['extend'];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups
  }, {});

  /**
   * Get total size
   */
  for (let key in result) {
    let totalSize = 0;
    const colorType = fileColors[key] ? fileColors[key] : getRandomColor(1)[0];
    fileColors[key] = colorType;

    result[key].forEach(item => totalSize += item.size);

    filesStatistic.push({
      type: key,
      size: totalSize,
      colorType: colorType
    })
  }

  setNewFileColors(fileColors);

  return filesStatistic
};
