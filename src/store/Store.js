import { createStore } from "redux";

const initData = {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    checkedData: []
}

export const todoReducer = (state = initData, action) => {
    switch (action.type) {
        case "ADD":
            return addReduce(state, action);
        case "DELETE":
            return deleteReduce(state, action);
        case "ADD-CHECKED":
            return addCheckedReduce(state, action);
        case "DELETE-CHECKED":
            return deleteCheckedReduce(state, action);
        default:
            return state;
    }
}

const addReduce = (state, action) => {
    let newData = state.data.slice();
    newData.push(action.message);

    return {
        ...state,
        data: newData,
    }
}

const deleteReduce = (state, action) => {
    let newData = state.data.slice();
    newData.splice(action.index, 1);

    return {
        ...state,
        data: newData,
    }
}

const addCheckedReduce = (state, action) => {
    let newData = action.message.slice();

    return {
        ...state,
        checkedData: newData,
    }
}

const deleteCheckedReduce = (state, action) => {
    let newData = state.checkedData.slice();
    newData.splice(action.index, 1);

    return {
        ...state,
        checkedData: newData,
    }
}

export default createStore(todoReducer);