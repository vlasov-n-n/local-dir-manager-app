/**
 * @param {Array} array
 * @return {Array<StatItem>}
 */
export default (array) => {
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
    result[key].forEach(item => totalSize += item.size);
    filesStatistic.push({
      type: key,
      size: totalSize
    })
  }

  return filesStatistic
};
