//in userReducer.ts
import { SET_CURRENT_USER, LOGOUT, SET_LOADING } from '../types';

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
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload,
            };
        case LOGOUT:
            return initialState;
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}