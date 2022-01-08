import { UiType } from './ui.type';

const initialState = {
    loading: false,
    errors: null
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case UiType.SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case UiType.CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };
        case UiType.LOADING_UI:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}