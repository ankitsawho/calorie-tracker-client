const initialState = null
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "STORE" : return action.payload
        case "REMOVE"  : return initialState
        default: return state
    }
}

export default userReducer