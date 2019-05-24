/**
 * Directories list item
 * @typedef DirectoryItem
 * @type {Object}
 * @property {string} name The item name,
 * @property {string} type The item type,
 * @property {date} date The date create or change item,
 * @property {number} size The items size,
 * @property {string} path The items path,
 * @property {string} child
 */

/**
 * Directories list
 * @typedef DirectoriesList
 * @type {Array}
 * @property {DirectoryItem} directories The list directories
 */

/**
 * Directories info
 * @typedef Directories
 * @type {Object}
 * @property {string} defaultPath The default directory location,
 * @property {DirectoriesList} directories The list directories
 */
