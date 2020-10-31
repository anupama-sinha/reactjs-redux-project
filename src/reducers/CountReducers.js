const initialState = {
    count: 0
}

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const RESET = "RESET";
export const INCREASE_ASYNC = "INCREASE_ASYNC";

export default function CountReducers (state=initialState, action){
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: action.payload + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: action.payload - 1
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}