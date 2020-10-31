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