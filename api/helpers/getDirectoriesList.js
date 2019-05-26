/**
 * Set children for current directory
 * @param {Array<DirectoryItem>} allDirectoryItems
 */
export default (allDirectoryItems) => {
  return allDirectoryItems
    .map((item) => {
      if (item.type === 'DIR') {
        item.child = allDirectoryItems
          .filter(arrItem => arrItem.parent === item.path)
          .map(arrItem => ({
            name: arrItem.name,
            size: arrItem.size,
            type: arrItem.type
          }));
        return item
      }
    })
    .filter(item => item); // Delete empty elements from array
}
