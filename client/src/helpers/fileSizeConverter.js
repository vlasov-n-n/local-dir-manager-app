/**
 * Convert file size
 * @param {number} size
 * @returns {string}
 */
export default function (size) {
  if (size === 0) {
   return '0 B'
  } else {
    let i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
  }
};
