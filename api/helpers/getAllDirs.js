import fs from 'fs'
import {defaultDirPath} from '../../config/env';

/**
 * Function for getting all directories and files
 * @returns {Directories}
 */
//FIXME wrong directory size
function index() {
  /**
   * Init array for directories
   * @type {Array}
   */
  let allDirectoryItems = [];

  /**
   * Recursive function for get all directory items
   * @param {string} dir
   */
  const getAllDir = (dir) => {
    const currentDir = fs.readdirSync(dir)
      .map(dirItem => {
        const item = fs.statSync(dir + '/' + dirItem);
        const type = item.isFile() ? 'FILE' : 'DIR';
        const itemObj = {
          name: dirItem,
          path: dir + '/' + dirItem,
          type: type,
          size: item['size'],
          date: item['birthtime'],
          parent: dir,
        };

        allDirectoryItems.push(itemObj);

        return itemObj
      });

    currentDir.forEach(item => {
      if (item.type === 'DIR') {
        getAllDir(item.path)
      } else return allDirectoryItems;
    })
  };

  getAllDir(defaultDirPath);

  /**
   * Set childs for current directory
   */
  const directoryList = allDirectoryItems
    .map((item) => {
      if (item.type === 'DIR') {
        item.child = allDirectoryItems
          .filter(arrItem => arrItem.parent === item.path)
          .map(arrItem => ({
            name: arrItem.name,
            size: arrItem.size,
            type: arrItem.type
          }));
        return item
      }
    })
    .filter(item => item); // Delete empty elements from array

  return {
    defaultPath: defaultDirPath,
    directories: directoryList
  }
}

export default index
