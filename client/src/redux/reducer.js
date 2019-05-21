import { combineReducers } from 'redux';

import homeReducer, {moduleName as home} from '../ducks/HomeDuck';

export default combineReducers({
  [home]: homeReducer,
});
