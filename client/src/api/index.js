import axios from 'axios';

const dir = '/dir';

/**
 * Default settings for axios
 */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

/**
 * Request for get all directories
 */
const getAllDirReq = () => {
  return axiosInstance.get(dir).then((res) => res.data)
};

/**
 * Request for create new dir
 * @param newDirName
 */
const createNewDirReq = (newDirName) => {
  return axiosInstance.post(dir, {newDirName}).then((res) => res.data)
};

export {
  getAllDirReq,
  createNewDirReq
}
