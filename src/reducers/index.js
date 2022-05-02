import userReducer from "./userReducer";
import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    userReducer,
    dateReducer,
    dataReducer
})

export default rootReducer