import actionTypes from "./actionTypes";

export const startAlgoExecution = (value) => ({
    type: actionTypes.IS_ALGO_RUNNING,
    value
})

export const setCurrentBubbleTwo = (payload) => ({
    type: actionTypes.SET_CURRENT_BUBBLETWO,
    payload
})

export const setCurrentSwappers = (payload) => ({
    type: actionTypes.SET_CURRENT_SWAPPERS,
    payload
})

export const setCurrentSorted = (payload) => ({
    type: actionTypes.SET_CURRENT_SORTED,
    payload
})

export const setRunning = (payload) => ({
    type: actionTypes.SET_RUNNING,
    payload
})

export const setArray = (payload) => ({
    type: actionTypes.SET_ARRAY,
    payload
})

export const setAlgorithm = (payload) => ({
    type: actionTypes.SET_ALGORITHM,
    payload
})

export const setCurrentMergeX = (payload) => ({
    type: actionTypes.SET_CURRENT_MERGEX,
    payload
})

export const setCurrentQuickTwo = (payload) => ({
    type: actionTypes.SET_CURRENT_QUICKTWO,
    payload
})

export const setPivot = (payload) => ({
    type: actionTypes.SET_PIVOT,
    payload
})

export const setCurrentHeapThree = (payload) => ({
    type: actionTypes.SET_CURRENT_HEAPTHREE,
    payload
})