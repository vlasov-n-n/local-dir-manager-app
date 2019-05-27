/**
 * Initial state
 * @typedef InitState
 */
export const initState = {
  /** @type {boolean} */
  modalIsOpen: false,
  /** @type {DirectoryItem || null} */
  currentDirInfo: null
};

export const moduleName = 'modal';

export const OPEN_MODAL = `${moduleName}_OPEN_MODAL`;
export const CLOSE_MODAL = `${moduleName}_CLOSE_MODAL`;

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
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        currentDirInfo: payload.currentDirInfo
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        currentDirInfo: null
      };

    default:
      return state;
  }
}

/**
 * Open modal with current directory information
 * @param {DirectoryItem} directory
 */
export const openModalAction = (directory) => {
  return {
    type: OPEN_MODAL,
    payload: {
      currentDirInfo: directory
    }
  }
};

/**
 * Closing the modal and clear the state field currentDirInfo
 */
export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL
  }
};
