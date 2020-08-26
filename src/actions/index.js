export const addData = (text) => {
    return {
        type: "ADD",
        message: text
    }
}

export const deleteData = (index) => {
    return {
        type: "DELETE",
        index: index
    }
}

export const addCheckedData = (text) => {
    return {
        type: "ADD-CHECKED",
        message: text
    }
}

export const deleteCheckedData = (index) => {
    return {
        type: "DELETE-CHECKED",
        index: index
    }
}