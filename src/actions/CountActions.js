export const incrementAction = (count) => {
  return {
    type: 'INCREASE',
    payload: count
  }
}
export function decrementAction(count){
  return {
    type: 'DECREASE',
    payload: count
  }
}
export const resetAction = (count) => {
  return {
    type: 'RESET',
    payload: count
  }
}

//Saga
export const incrementActionAsync = (countSaga) => {
  return {
    type: 'INCREASE_ASYNC',
    payload: countSaga
  }
}

export const incrementActionAsyncSaga  = (countSaga) => {
  return {
    type: 'INCREASE_ASYNC_WATCH',
    payload: countSaga
  }
}