import { SET_CURRENT_USER } from './auth.action';

const initialSate = {
    currentUser: {
        username: "admin",
        email: "admin@teste.com"
    },
}

export default function(state = initialSate, action) {
    switch(action.type) {
        // case SET_CURRENT_USER: return state
        case SET_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }
}