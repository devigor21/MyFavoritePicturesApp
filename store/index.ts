import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {picturesReducer} from './reducers/picturesReducer';
import {rootWatcher} from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(picturesReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootWatcher);
