import { AnyAction } from 'redux';
import { SET_CURRENT_USER, SIGNIN } from './auth.action';

const initialSate = {
    currentUser: {
        username: "admin",
        email: "admin@teste.com"
    },
}

export default function(state = initialSate, action: AnyAction) {
    switch(action.type) {
        // case SET_CURRENT_USER: return state
        case SET_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        case SIGNIN: return {
            ...state,
            currentUser: action.payload,
            // access_token: access_token
        }
        default: return state;
    }
}