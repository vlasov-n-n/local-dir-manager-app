import fs from 'fs';
import {defaultDirPath} from '../../config/env';

/**
 * Create new directory
 * @param {string} newDirPath
 */
export default (newDirPath) => {
  const dirs = newDirPath.split('/');

  let dir = defaultDirPath + '/';

  dirs.forEach(item => {
    dir += item + '/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  })
}
