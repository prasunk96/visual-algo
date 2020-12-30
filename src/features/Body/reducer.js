import actionTypes from "./actionTypes";

const initialState = {
    isAlgoRunning: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.IS_ALGO_RUNNING:
            return {
                ...state,
                isAlgoRunning: action.value
            }
        default:
            return { ...state }
    }
}

export default reducer;