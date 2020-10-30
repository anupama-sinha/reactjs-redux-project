export const incrementAction = (count) => {
  return {
    type: 'INCREASE'
  }
}
export function decrementAction(){
  return {
    type: 'DECREASE'
  }
}
export const resetAction = () => {
  return {
    type: 'RESET'
  }
}