import { createStore } from "redux";

const initData = {
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    checkedData: [],
    notCheckedData: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
}

export const todoReducer = (state = initData, action) => {
    switch (action.type) {
        case "ADD":
            return addReduce(state, action);
        case "DELETE":
            return deleteReduce(state, action);
        case "ADD-CHECKED":
            return addCheckedReduce(state, action);
        default:
            return state;
    }
}

const addReduce = (state, action) => {
    let newData = state.data.slice();
    let newNotCheckedData = state.notCheckedData.slice();

    newData.push(action.message);
    newNotCheckedData.push(action.message);

    return {
        ...state,
        data: newData,
        notCheckedData: newNotCheckedData,
    }
}

const deleteReduce = (state, action) => {
    let newData = state.data.slice();
    const dataIndex = state.data.indexOf(action.message);
    newData.splice(dataIndex, 1);

    let newCheckedData = state.checkedData.slice();
    const checkedDataIndex = state.checkedData.indexOf(action.message);
    if (checkedDataIndex !== -1) {
        newCheckedData.splice(checkedDataIndex, 1);
    }

    let newNotCheckedData = state.notCheckedData.slice();
    const notCheckedDataIndex = state.notCheckedData.indexOf(action.message);
    if (notCheckedDataIndex !== -1) {
        newNotCheckedData.splice(notCheckedDataIndex, 1);
    }

    return {
        ...state,
        data: newData,
        checkedData: newCheckedData,
        notCheckedData: newNotCheckedData,
    }
}

const addCheckedReduce = (state, action) => {
    let newCheckedData = action.checked.slice();

    let newNotCheckedData = action.notChecked.slice();

    return {
        ...state,
        checkedData: newCheckedData,
        notCheckedData: newNotCheckedData
    }
}
export default createStore(todoReducer);