import {put, takeEvery, call} from 'redux-saga/effects';

import {fetchPictures} from '../store/actions/pictureAction';
import {PictureActionTypes} from '../models/Picture';

const BASE_URL = 'https://picsum.photos';

const fetchPicsFromApi = () => fetch(`${BASE_URL}/v2/list?&limit=60`);

function* fetchPicsWorker() {
  try {
    const data = yield call(fetchPicsFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(fetchPictures(json));
  } catch (error) {
    console.warn(error);
  }
}

export function* picturesWatcher() {
  yield takeEvery(PictureActionTypes.SET_PICTURES, fetchPicsWorker);
}
