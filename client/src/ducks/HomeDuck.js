import {all, put, takeLatest} from 'redux-saga/effects';
import {createNewDirReq, getAllDirReq} from '../api';

/**
 * Initial state
 * @typedef InitState
 * @type {{
 *  isLoading: boolean,
 *  loadingError: null | string,
 *  directories: Directories,
 *  error: null | String:
 * }}
 */
export const initState = {
  isLoading: false,
  loadingError: null,
  createDirError: null,
  directories: {
    defaultPath: './opt/',
    directories: []
  },
};

export const moduleName = 'home';

export const GET_ALL_DIR_REQ = `${moduleName}_GET_ALL_DIR_REQ`;
export const GET_ALL_DIR_ERROR = `${moduleName}_GET_ALL_DIR_ERROR`;
export const GET_ALL_DIR_SUCCESS = `${moduleName}_GET_ALL_DIR_SUCCESS`;

export const CREATE_DIR_REQ = `${moduleName}_CREATE_DIR`;
export const CREATE_DIR_ERROR = `${moduleName}_CREATE_DIR_ERROR`;
export const CREATE_DIR_SUCCESS = `${moduleName}_CREATE_DIR_SUCCESS`;

/**
 * Redux reducer
 * @param {InitState} state
 * @param {{
 *   type: string,
 *   payload: Object
 * }} action
 * @returns {*}
 */
export default function reducer(state = initState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ALL_DIR_REQ:
    case CREATE_DIR_REQ:
      return {
        ...state,
        isLoading: true,
        loadingError: null,
        createDirError: null
      };
    case GET_ALL_DIR_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: payload.error
      };
    case CREATE_DIR_ERROR:
      return {
        ...state,
        isLoading: false,
        createDirError: payload.error
      };
    case GET_ALL_DIR_SUCCESS:
    case CREATE_DIR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        directories: payload.directories,
        loadingError: null,
        createDirError: null
      };

    default:
      return state;
  }
}

/**
 * Action for getting directory list
 * @returns {{type: string}}
 */
export function getAllDirAction() {
  return {
    type: GET_ALL_DIR_REQ
  };
}

/**
 * Action for create new directory
 * @param {string} newDirName
 * @returns {{type: string, payload: {newDirName: string}}}
 */
export function createDirAction(newDirName) {
  return {
    type: CREATE_DIR_REQ,
    payload: {newDirName}
  };
}

/**
 * Saga for get all directories list
 * @returns {IterableIterator<*>}
 */
export const getAllDirSaga = function* () {
  try {
    const directories = yield getAllDirReq();
    yield put({
      type: GET_ALL_DIR_SUCCESS, payload: {directories}
    })
  } catch (e) {
    yield put({type: GET_ALL_DIR_ERROR, payload:{error: e.response.data.error}});
  }
};

/**
 * Saga for create new directory
 * @param {{type: string, payload: Object}}
 * @returns {IterableIterator<*>}
 */
export const createDirSaga = function* ({payload}) {
  try {
    const directories = yield createNewDirReq(payload.newDirName);
    yield put({
      type: CREATE_DIR_SUCCESS, payload: {directories}
    })
  } catch (e) {
    yield put({type: CREATE_DIR_ERROR, payload: {error:e.response.data.error}});
  }
};

export const homeSaga = function* () {
  yield all([
    takeLatest(GET_ALL_DIR_REQ, getAllDirSaga),
    takeLatest(CREATE_DIR_REQ, createDirSaga),
  ]);
};
