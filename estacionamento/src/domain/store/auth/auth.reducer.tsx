import { Reducer } from "redux";
import { UserModel } from "../../models";
import { AuthType, AuthDispatchTypes } from "./auth.type"

export interface AuthState {
    readonly isLogged: boolean,
    readonly errorMsg: string,
    readonly currentUser: UserModel
}


const initialState: AuthState = {
    isLogged: false,
    errorMsg: "",
    currentUser: {
        username: "",
        email: ""
    },
}

const authReducer = (state: AuthState = initialState, action: AuthDispatchTypes) => {
    switch (action.type) {
        case AuthType.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
};
  
export default authReducer;




// export default function(state = INITIAL_STATE, action) {
//     switch(action.type) {
//         // case SET_CURRENT_USER: return state
//         case SET_CURRENT_USER: return {
//             ...state,
//             currentUser: action.payload
//         }
//         default: return state;
//     }
// }