/**
 * Parse string for sorting
 * @param {string} sortItem
 * @return {{
 *   resultString: string,
 *   resultInt: Array<number>
 * }} sortItem
 */
const getStringForSort = (sortItem) => {
  const regexpString = sortItem
    .replace(/\.[^/.]+$/, '')
    .match(/[A-Za-z]/g);
  const regexpInt = sortItem.match(/[\d]+/g);

  const resultString = regexpString ? regexpString
    .join('')
    .toLowerCase() : '';

  const resultInt = regexpInt ? regexpInt
    .map(i => parseInt(i)) : [];

  return {
    resultString,
    resultInt
  }
};

/**
 * Array sort function.
 * @param {Array<string>} fields
 * @returns {function(*, *): *}
 */
const fieldSorter = (fields) => (a, b) => fields.map(o => {
  let dir = 1;
  if (o[0] === '-') {
    dir = -1;
    o = o.substring(1);
  }

  let first = null;
  let second = null;

  switch (o) {
    case 'name':
      const parseFirst = getStringForSort(a[o]);
      const parseSecond = getStringForSort(b[o]);
      const maxIntLength = parseFirst.resultInt.length > parseSecond.resultInt.length
        ? parseFirst.resultInt.length
        : parseSecond.resultInt.length;
      let firstNumbers = '';
      let secondNumber = '';

      /**
       * Format numbers:
       * before: 1 2 3 and 2 1 0
       * after: 0 1 1 and 1 0 0
       */
      for (let i = 0; maxIntLength > i; i++) {
        const first = parseFirst.resultInt[i] ? parseFirst.resultInt[i] : 0;
        const second = parseSecond.resultInt[i] ? parseSecond.resultInt[i]: 0;
        firstNumbers += first > second ? 1 : 0;
        secondNumber += second > first ? 1 : 0;
      }

      first = parseFirst.resultString+firstNumbers;
      second = parseSecond.resultString+secondNumber;
      break;
    case 'type':
      first = (a[o] === 'DIR') ? -1 : 1;
      second = (b[o] === 'DIR') ? -1 : 1;
      break;
    default:
      first = a[o];
      second = b[o];
  }

  return first > second ? dir : first < second ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);

/**
 * File sorter function
 * @param {Array<DirsChild>} filesArray
 * @returns {void | this}
 */
const filesSorter = (filesArray) => {
  return filesArray.sort(fieldSorter(['type', 'name']));
};

/**
 * Directories sorter
 * @param {Array<DirectoryItem>} dirsArray
 * @param {Array<string>} params
 * @returns {void | this}
 */
const dirsSorter = (dirsArray, params) => {
  return dirsArray.sort(fieldSorter(params));
};

export {
  filesSorter,
  dirsSorter
}
