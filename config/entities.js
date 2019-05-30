/**
 * Dirs children
 * @typedef DirsChild
 * @type {Object}
 * @property {string} name The item name,
 * @property {string} type The item type,
 * @property {number} size The item size
 */

/**
 * Directories list item
 * @typedef DirectoryItem
 * @type {Object}
 * @property {string} name The item name,
 * @property {string} type The item type,
 * @property {date} date The date create or change item,
 * @property {number} size The items size,
 * @property {string} path The items path,
 * @property {Array<DirsChild>} child
 */

/**
 * @typedef StatItem
 * @type {Object}
 * @property {string} type
 * @property {string} size
 * @property {string} colorType
 */

/**
 * Directories list
 * @typedef DirectoriesList
 * @type {Array.<DirectoryItem>} directories The list directories
 */

/**
 * Directories info
 * @typedef Directories
 * @type {Object}
 * @property {string} defaultPath The default directory location,
 * @property {DirectoriesList} directories The list directories
 * @property {Object} filesStatistic The files statistic
 */
