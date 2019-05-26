/**
 * @param {Array} array
 * @param {string} type - The type for grouping
 * @return {Object}
 */
export default (array, type) => {
  const filesStatistic = {};

  /**
   * Array group by type
   * @type {Array}
   */
  const result = array.reduce(function(groups, item) {
    const val = item[type];
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
    filesStatistic[key] = totalSize
  }

  return filesStatistic

};
