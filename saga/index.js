import {all} from 'redux-saga/effects';
import {picturesWatcher} from './picturesSaga';

export function* rootWatcher() {
  yield all([picturesWatcher()]);
}
