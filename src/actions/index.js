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

export const addDoneData = (text) => {
    return {
        type: "ADD-DONE",
        message: text
    }
}

export const deleteDoneData = (index) => {
    return {
        type: "DELETE-DONE",
        index: index
    }
}