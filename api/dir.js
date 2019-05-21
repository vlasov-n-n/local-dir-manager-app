const express = require('express');
const router = express.Router();

// @route GET api/dir
// @desc Get all directories
// @access Pubic
router.get('/', (req, res) => {
  /** @type {Directory} */
  const testDirItem = {
    date: '10.10.1001',
    name: 'test-dir',
    dirs: [],
    files: [{
      name: 'test-file',
      size: '54kb'
    }],
    size: '54kb'
  };

  /** @type {Directories} */
  const testDirList = {
    defaultPath: '/test',
    directories: [testDirItem]
  };

  res.json(testDirList)
});

// @route POST api/dir
// @desc Create new directory
// @access Pubic
router.post('/', (req, res) => {
  /** @type {Directory} */
  const testDirItem = {
    date: '10.10.1001',
    name: 'test-dir1',
    dirs: [],
    files: [{
      name: 'test-file',
      size: '54kb'
    }],
    size: '54kb'
  };

  /** @type {Directory} */
  const testDirItem2 = {
    date: '10.10.1001',
    name: 'test-dir2',
    dirs: [],
    files: [{
      name: 'test-file',
      size: '54kb'
    }],
    size: '54kb'
  };

  /** @type {Directories} */
  const testDirList = {
    defaultPath: '/test',
    directories: [testDirItem, testDirItem2]
  };

  res.json(testDirList)
});

module.exports = router;
