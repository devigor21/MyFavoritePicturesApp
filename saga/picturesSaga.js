import {put, takeEvery, call} from 'redux-saga/effects';
import {SET_PICTURES, fetchPictures} from '../store/reducers/picturesReducer';

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
  yield takeEvery(SET_PICTURES, fetchPicsWorker);
}
