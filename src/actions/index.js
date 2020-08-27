export const addData = (text) => {
    return {
        type: "ADD",
        message: text
    }
}

export const deleteData = (text) => {
    return {
        type: "DELETE",
        message: text
    }
}

export const addCheckedData = (array1, array2) => {
    return {
        type: "ADD-CHECKED",
        checked: array1,
        notChecked: array2,
    }
}