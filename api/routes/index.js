import express from 'express';
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
    res.json({error: 'Что-то пошло не так ¯\\_(ツ)_/¯'})
  }

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
