export const StoreUserData = (user) => {
    return {type : "STORE", payload: user}
}

export const RemoveUserData = () => {
    return {type : "REMOVE"}
}

export const StoreDate = (date) => {
    return {type : "STORE_DATE", payload: date}
}

export const StoreCurrentDateData = (data) => {
    return {type : "STORE_CURRENT_DATA", payload: data}
}