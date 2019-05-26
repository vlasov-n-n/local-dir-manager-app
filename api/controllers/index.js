import getAllDirs from '../helpers/getAllDirectoryItems';
import isEmpty from '../helpers/isEmpty';
import getFilesStat from '../helpers/getFilesStat';
import getDirectoriesList from '../helpers/getDirectoriesList';
import {defaultDirPath} from '../../config/env';

/**
 * App cash
 * @type {Directories}
 */
const cash = {};

/**
 * Set dir list to cash
 * @param {Directories} dirList
 * @returns {*}
 */
const setCash = (dirList) => {
  return Object.assign(cash, dirList)
};

/**
 * Get dir list from cash
 * @returns {Directories}
 */
const getCash = () => {
  return cash
};

/**
 * Get directories
 * @returns {Directories}
 */
const getAllDirController = () => {
  const cash = getCash();
  if(isEmpty(cash)) {
    const allDirectoryItems = getAllDirs();
    const directoriesList = getDirectoriesList(allDirectoryItems);
    const filesStatistic = getFilesStat(allDirectoryItems, 'extend');

    const directories = {
      defaultPath: defaultDirPath,
      directories: directoriesList,
      filesStatistic: filesStatistic
    };

    setCash(directories);

    return directories
  } else {
    return getCash();
  }
};

/**
 * Create new directory
 * @param {string} newDirName
 * @returns {Directories} Directories list
 * @constructor
 */
//TODO Need make logic for create new directory
const createNewDirController = (newDirName) => {
  return getCash();
};

export {
  getAllDirController,
  createNewDirController
};
