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
      first = a[o].toLowerCase();
      second = b[o].toLowerCase();
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
