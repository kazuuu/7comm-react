import { LOGIN } from './auth.action';

const initialSate = {
    currentUser: {
        username: "admin",
        email: "admin@teste.com"
    },
}

export default function(state = initialSate, action) {
    switch(action.type) {
        case LOGIN: return {
            ...state,
            min: action.payload
        }
        default: return state;
    }
}