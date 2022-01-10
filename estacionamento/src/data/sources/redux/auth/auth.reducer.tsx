//in userReducer.ts
import { AuthType } from './auth.type';

export interface IAuthState {
    isAuthenticated: boolean,
    loading: boolean,
    access_token: String,
    currentUser: {
        username: String,
        email: String,
    },
}

const initialState: IAuthState = {
    isAuthenticated: false,
    loading: false,
    access_token: "",
    currentUser: {
        username: "",
        email: "",
    },
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case AuthType.SET_ACCESS_TOKEN:
            return {
                ...state,
                isAuthenticated: true,
                access_token: action.payload,
            };        
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