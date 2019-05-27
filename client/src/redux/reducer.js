import { combineReducers } from 'redux';

import homeReducer, {moduleName as home} from '../ducks/HomeDuck';
import modalReducer, {moduleName as modal} from '../ducks/ModalDuck';

export default combineReducers({
  [modal]: modalReducer,
  [home]: homeReducer
});
