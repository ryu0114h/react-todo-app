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