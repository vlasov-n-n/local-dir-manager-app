import express from 'express';
import fs from 'fs';

import {defaultDirPath} from '../../config/env';
import {getAllDirController, createNewDirController} from '../controllers';

const router = express.Router();

// @route GET api/dir
// @desc Get all directories
// @access Pubic
router.get('/', (req, res) => {
  try {
    const allDirectories = getAllDirController();
    res.statusCode = 200;
    res.json(allDirectories)
  } catch (e) {
    res.statusCode = 500;
    res.json({error: 'get_error'})
  }
});

// @route POST api/dir
// @desc Create new directory
// @access Pubic
router.post('/', (req, res) => {
  const newDirName = req.body.newDirName;

  try {
    const isExist = fs.existsSync(defaultDirPath+'/'+newDirName);
    if (isExist) {
      res.statusCode = 500;
      res.json({error: 'path_exist_error'})
    } else {
      const allDirectories = createNewDirController(newDirName);
      res.statusCode = 200;
      return res.json(allDirectories)
    }
  } catch (e) {
    res.statusCode = 500;
    return res.json({error: 'create_error'})
  }
});

module.exports = router;
