import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from '../sagas';
import CountReducers from '../reducers/CountReducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(CountReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);