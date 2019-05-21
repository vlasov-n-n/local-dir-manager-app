import { all } from 'redux-saga/effects';
import {homeSaga} from '../ducks/HomeDuck';

/**
 * Compose sagas
 */
export default function* rootSaga() {
  yield all([
    homeSaga()
  ]);
}
