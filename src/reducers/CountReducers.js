const initialState = {
    count: 0,
    countSaga: 0
}

export default function CountReducers(state = initialState, action) {
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
        case 'INCREASE_ASYNC':
            return {
                ...state,
                countSaga: action.payload + 1
            }
        case 'INCREASE_ASYNC_WATCH':
            console.log("Action.payload",action)
            return {
                ...state,
                countSaga: action.payload + 1
            }
        default:
            return {
                ...state
            }    
    }
}