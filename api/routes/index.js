import express from 'express';
import {getAllDirController, createNewDirController} from '../controllers';

const router = express.Router();

// @route GET api/dir
// @desc Get all directories
// @access Pubic
router.get('/', (req, res) => {
  const allDirectories = getAllDirController();
  res.json(allDirectories)
});

// @route POST api/dir
// @desc Create new directory
// @access Pubic
router.post('/', (req, res) => {
  const newDirName = req.body.newDirName;
  const allDirectories = createNewDirController(newDirName);
  res.json(allDirectories)
});

module.exports = router;
