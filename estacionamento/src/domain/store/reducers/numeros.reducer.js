import { NUM_MIN_ALTERADO } from '../actions/actionTypes';

const initialSate = {
    min: 1,
    max: 10
}

export default function(state = initialSate, action) {
    switch(action.type) {
        case NUM_MIN_ALTERADO: return {
            ...state,
            min: action.payload
        }
        default: return state;
    }
}