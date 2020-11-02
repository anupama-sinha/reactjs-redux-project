import { takeEvery, takeLatest, put, delay, all } from 'redux-saga/effects';
// import { INCREASE, DECREASE, RESET,INCREASE_ASYNC } from '../reducers/CountReducers';

//Generator Functions
function* countIncreaseAsync({action}) {
   //Dispatches action
   yield delay(5000);
   const payload = action && action.payload;
   console.log('saga payload',payload)
   yield put({type: 'INCREASE_ASYNC',payload});
}
  
export function* watchCountIncrease(){
    //Watches every action for 'INCREASE_ASYNC_WATCH' type
    // yield takeEvery('INCREASE_ASYNC_WATCH', countIncreaseAsync);

    //Watches latest action for 'INCREASE_ASYNC_WATCH' type
    //Action must be different from  dispacted action(countIncreaseAsync) to avoid indefinite loop
    yield takeLatest('INCREASE_ASYNC_WATCH', countIncreaseAsync)
}

// export default function* rootSaga() {
//     yield all([
//         watchCountIncrease(),
//     ]);
//   }