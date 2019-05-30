import getAllDirs from '../helpers/getAllDirectoryItems';
import isEmpty from '../helpers/isEmpty';
import getFilesStat from '../helpers/getFilesStat';
import getDirectoriesList from '../helpers/getDirectoriesList';
import {defaultDirPath} from '../../config/env';

/**
 * App cache
 * @type {Object}
 */
const cache = {};

/**
 * Set dir list to cache
 * @param {Directories} dirList
 * @returns {*}
 */
const setCache = (dirList) => {
  return Object.assign(cache, dirList)
};

/**
 * Get dir list from cache
 * @returns {Object}
 */
const getCache = () => {
  return cache
};

/**
 * Get directories
 * @returns {Directories}
 */
const getAllDirController = () => {
  const cash = getCache();
  if(isEmpty(cash)) {
    const allDirectoryItems = getAllDirs();
    const directoriesList = getDirectoriesList(allDirectoryItems);
    const filesStatistic = getFilesStat(allDirectoryItems);

    const directories = {
      defaultPath: defaultDirPath,
      directories: directoriesList,
      filesStatistic: filesStatistic
    };

    setCache(directories);

    return directories
  } else {
    return getCache();
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
  const allDirectoryItems = getAllDirs();
  const directoriesList = getDirectoriesList(allDirectoryItems);
  const filesStatistic = getFilesStat(allDirectoryItems);

  const directories = {
    defaultPath: defaultDirPath,
    directories: directoriesList,
    filesStatistic: filesStatistic
  };

  setCache(directories);

  return directories;
};

export {
  getAllDirController,
  createNewDirController
};
