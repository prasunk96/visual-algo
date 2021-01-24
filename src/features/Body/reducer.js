import actionTypes from "./actionTypes";

const initialState = {
  isAlgoRunning: false,
  array: [],
  currentSwappers: [],
  currentSorted: [],
  isRunning: false,
  currentBubbleTwo: [],
  algorithm: '',
  currentMergeX: [],
  currentQuickTwo: [],
  pivot: null,
  currentHeapThree: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_ALGO_RUNNING:
      return {
        ...state,
        isAlgoRunning: action.value,
      };
    case actionTypes.SET_CURRENT_BUBBLETWO:
      return {
        ...state,
        currentBubbleTwo: action.payload
      };
    case actionTypes.SET_CURRENT_SWAPPERS:
      return {
        ...state,
        currentSwappers: action.payload.length ? action.payload : []
      };
    case actionTypes.SET_CURRENT_SORTED:
      return {
        ...state,
        currentSorted: action.payload.length ? action.payload : []
      };
    case actionTypes.SET_ARRAY:
      return {
        ...state,
        array: action.payload
      };
    case actionTypes.SET_RUNNING:
        return {
            ...state,
            isRunning: action.payload
        }
    case actionTypes.SET_ALGORITHM:
        return {
            ...state,
            algorithm: action.payload
        }
    case actionTypes.SET_CURRENT_MERGEX:
        return {
            ...state,
            currentMergeX: action.payload
        }
    case actionTypes.SET_CURRENT_QUICKTWO:
        return {
            ...state,
            currentQuickTwo: action.payload
        }
    case actionTypes.SET_PIVOT:
        return {
            ...state,
            pivot: action.payload
        }
    case actionTypes.SET_CURRENT_HEAPTHREE:
        return {
            ...state,
            currentHeapThree: action.payload
        }
    default:
      return { ...state };
  }
};

export default reducer;
