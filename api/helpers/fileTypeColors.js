import fs from 'fs';
import {fileColorsPath} from '../../config/env';

/**
 * Get colors for file type
 * @return {Array<Object>} fileColor
 */
export const getAllFileColors = () => {
  try {
    let allFilesColors = fs.readFileSync(fileColorsPath);
    return JSON.parse(allFilesColors)
  } catch (e) {
    return [{}] //return empty object
  }
};

/**
 * Write colors to config file
 * @param newData
 */
export const setNewFileColors = (newData) => {
  try {
    fs.writeFileSync(fileColorsPath, JSON.stringify(newData));
  } catch (e) {
    console.log(e);
  }
};
