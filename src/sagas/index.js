import { put, takeEvery, takeLatest, all, call, delay } from 'redux-saga/effects';
import { INCREASE, DECREASE, RESET,INCREASE_ASYNC } from '../reducers/CountReducers';

function* increaseAync() {
    yield put({ type: 'INCREASE' });
    yield delay(1000);
  }
  
  function* watchIncreaseAsync() {
    yield takeLatest('INCREASE_ASYNC', increaseAync);
  }
  
  export function* rootSagas() {
    yield all([watchIncreaseAsync()]);
  }