const initialState = []
const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case "STORE_CURRENT_DATA"  : return action.payload
        default: return state
    }
}

export default dataReducer