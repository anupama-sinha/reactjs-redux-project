import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import CountReducers from '../reducers/CountReducers';
import { watchCountIncrease } from '../sagas/saga'
// import rootSaga from '../sagas/saga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(CountReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCountIncrease);
// sagaMiddleware.run(rootSaga);