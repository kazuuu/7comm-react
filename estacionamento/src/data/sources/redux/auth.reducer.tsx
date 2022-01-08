//in userReducer.ts
import { AuthType } from './auth.type';

const initialState = {
    isAuthenticated: false,
    loading: false,
    currentUser: {
        username: "",
        email: ""
    },
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case AuthType.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload,
            };
        case AuthType.LOGOUT:
            return initialState;
        case AuthType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}