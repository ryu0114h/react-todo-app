import { createStore } from "redux";

const initData = {
    data: [0, 0, 1, 2, 3, 4, 0, 6, 7, 8, 9, 0],
}

export const todoReducer = (state = initData, action) => {
    switch (action.type) {
        case "ADD":
            return addReduce(state, action);
        case "DELETE":
            return deleteReduce(state, action);
        default:
            return state;
    }
}

const addReduce = (state, action) => {
    let newData = state.data.slice();
    newData.push(action.message);

    return {
        data: newData,
    }
}

const deleteReduce = (state, action) => {
    let newData = state.data.slice();
    newData.splice(action.index, 1);

    return {
        data: newData,
    }
}

export default createStore(todoReducer);