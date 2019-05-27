/**
 * Function for generate random colors by colorSize
 * @param {number} colorCount
 * @return {Array<string>}
 */
export default (colorCount) => {
  /**
   * Recursive function for generate random colors
   * @param {number} colorCount
   * @param {number} iteration
   * @param {Array} arr
   */
  const colorPush = (colorCount, iteration, arr) => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    const newArr = [].concat([color], arr);

    if(iteration === colorCount) {
      return newArr
    } else {
      return colorPush(colorCount, iteration += 1, newArr)
    }
  };

  return colorPush(colorCount, 1, []);
}
