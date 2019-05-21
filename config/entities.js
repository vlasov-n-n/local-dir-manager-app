/**
 * Directories list item
 * @typedef Directory
 * @type {Object}
 * @property {string} date The date create or change directory,
 * @property {string} name The name directory,
 * @property {Array<Directory>} dirs The number directories in the current directory,
 * @property {Array<File>} files The number files in the current directory,
 * @property {string} size The size current directory,
 */

/**
 * File
 * @typedef File
 * @type {Object}
 * @property {string} name
 * @property {string} size
 */

/**
 * Directories list
 * @typedef Directories
 * @type {Object}
 * @property {string} defaultPath The default directory location,
 * @property {Array<Directory>} directories The list directories
 */
