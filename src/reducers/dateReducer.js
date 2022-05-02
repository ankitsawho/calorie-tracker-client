var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;       

const initialState = today
const dateReducer = (state = initialState, action) => {
    switch(action.type){
        case "STORE_DATE"  : return action.payload
        default: return state
    }
}

export default dateReducer