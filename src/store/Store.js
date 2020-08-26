import { createStore } from "redux";

const initData = {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    doneDate: []
}

export const todoReducer = (state = initData, action) => {
    switch (action.type) {
        case "ADD":
            return addReduce(state, action);
        case "DELETE":
            return deleteReduce(state, action);
        case "ADD-DONE":
            return addDoneReduce(state, action);
        case "DELETE-DONE":
            return deleteDoneReduce(state, action);
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

const addDoneReduce = (state, action) => {
    let newData = action.message.slice();

    return {
        ...state,
        doneData: newData,
    }
}

const deleteDoneReduce = (state, action) => {
    let newData = state.doneData.slice();
    newData.splice(action.index, 1);

    return {
        ...state,
        doneData: newData,
    }
}

export default createStore(todoReducer);