import fs from 'fs'
import path from 'path';

import {defaultDirPath} from '../../config/env';

/**
 * Function for getting all directories and files
 * @returns {Array<DirectoryItem>}
 */
//TODO Need refactoring, its bad way ¯\_(ツ)_/¯
function index() {
  /**
   * Init array for directories
   * @type {Array<DirectoryItem>}
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
        const itemPath = dir + '/' + dirItem;
        let extend = '';
        let totalSize = item['size'];

        /**
         * Recursive function for get total size for directory
         * @param {String} dirPath
         */
        const getDirSize = (dirPath) => {
          const currentDir = fs.readdirSync(dirPath);
          currentDir.forEach(dirItem => {
            const path = dirPath + '/' + dirItem;
            const item = fs.statSync(path);
            item.isDirectory() && getDirSize(path);
            totalSize += item['size'];
          })
        };

        if (type === 'DIR') {
          getDirSize(itemPath);
          extend = 'DIR'
        } else {
          extend = path.extname(itemPath)
        }

        const itemObj = {
          name: dirItem,
          path: itemPath,
          type: type,
          extend: extend,
          size: totalSize,
          date: item['birthtime'],
          parent: dir,
        };

        allDirectoryItems.push(itemObj);

        return itemObj
      });

    currentDir.forEach(item => {
      if (item.type === 'DIR') {
        getAllDir(item.path)
      }
    })
  };

  getAllDir(defaultDirPath);

  return allDirectoryItems
}

export default index
