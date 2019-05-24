import getAllDirs from '../helpers/getAllDirs';

const isEmpty = require('../helpers/isEmpty');

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
 * Get all directories list
 * @returns {Directories}
 */
const getAllDirController = () => {
  const cash = getCash();
  if(isEmpty(cash)) {
    const allDir = getAllDirs();
    setCash(allDir);
    return allDir
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
  return getAllDirs()
};

export {
  getAllDirController,
  createNewDirController
};
