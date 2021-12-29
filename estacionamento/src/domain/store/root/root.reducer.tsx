import { combineReducers } from "redux";
import authReducer from "../auth/auth.reducer";

const RootReducer = combineReducers({
    authReducer: authReducer,
    nomes: function(state, action) {
        return [
            'A',
            'B',
            'C'               
        ]
    },
});

export default RootReducer